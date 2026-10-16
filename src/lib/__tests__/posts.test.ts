import fs from 'fs';
import os from 'os';
import path from 'path';

// Helper to create temporary markdown posts
function createMarkdownPost(dir: string, slug: string, date: string) {
  const blogDir = path.join(dir, 'src', 'content', 'blog');
  fs.mkdirSync(blogDir, { recursive: true });
  const filePath = path.join(blogDir, `${slug}.md`);
  fs.writeFileSync(
    filePath,
    `---\ndate: "${date}"\n---\ncontent`
  );
}

describe('getAllPosts', () => {
  const originalCwd = process.cwd();

  afterEach(() => {
    process.chdir(originalCwd);
    jest.resetModules();
  });

  test('returns posts sorted in descending date order', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'posts-test-'));
    createMarkdownPost(tempDir, 'first', '2021-01-01');
    createMarkdownPost(tempDir, 'second', '2023-05-10');
    createMarkdownPost(tempDir, 'third', '2022-06-15');
    fs.writeFileSync(path.join(tempDir, 'src', 'content', 'blog', 'NOT_A_POST.txt'), 'ignored');

    process.chdir(tempDir);
    jest.resetModules();

    const { getAllPosts } = await import('../posts');
    const result = getAllPosts();
    const slugs = result.map(p => p.slug);
    expect(slugs).toEqual(['second', 'third', 'first']);

    fs.rmSync(tempDir, { recursive: true, force: true });
  });
});

describe('article validation', () => {
  const originalCwd = process.cwd();
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'article-test-'));
    createMarkdownPost(tempDir, 'valid', '2021-01-01');
    process.chdir(tempDir);
    jest.resetModules();
  });

  afterEach(() => {
    process.chdir(originalCwd);
    jest.resetModules();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('missing and traversal slugs return null', async () => {
    const { getPostContent } = await import('../posts');
    expect(getPostContent('missing')).toBeNull();
    expect(getPostContent('../valid')).toBeNull();
    expect(getPostContent('%2e%2e%2fvalid')).toBeNull();
    expect(getPostContent('valid')?.data.date).toBe('2021-01-01');
  });

  test.each(['', 'not-a-date', '2023-02-30'])('rejects invalid source date %s', async (date) => {
    createMarkdownPost(tempDir, 'invalid', date);
    const { getAllPosts } = await import('../posts');
    expect(() => getAllPosts()).toThrow('Invalid or missing publication date');
  });

  test.each(['2023-02-30', '2023-02-29', '2021-01-01T23:00:00-04:00'])(
    'rejects unquoted invalid date-only value %s before YAML normalization', async (date) => {
      fs.writeFileSync(path.join(tempDir, 'src/content/blog/invalid.md'), `---\ndate: ${date}\n---\ncontent`);
      const { getPostContent } = await import('../posts');
      expect(() => getPostContent('invalid')).toThrow('Invalid or missing publication date');
    },
  );

  test('preserves valid unquoted leap-day dates with comments', async () => {
    fs.writeFileSync(path.join(tempDir, 'src/content/blog/leap.md'), '---\ndate: 2024-02-29 # original publication\n---\ncontent');
    const { getPostContent } = await import('../posts');
    expect(getPostContent('leap')?.data.date).toBe('2024-02-29');
    expect(getPostContent('leap')?.data.date).toBe('2024-02-29');
  });

  test('does not hide filesystem errors as missing articles', async () => {
    fs.mkdirSync(path.join(tempDir, 'src/content/blog/directory.md'));
    const { getPostContent } = await import('../posts');
    expect(() => getPostContent('directory')).toThrow();
  });
});
