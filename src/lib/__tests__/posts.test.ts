import fs from 'fs';
import os from 'os';
import path from 'path';
import { getAllPosts } from '../posts';

// Helper to create temporary markdown posts
function createMarkdownPost(dir: string, slug: string, date: string) {
  const blogDir = path.join(dir, 'src', 'content', 'blog');
  fs.mkdirSync(blogDir, { recursive: true });
  const filePath = path.join(blogDir, `${slug}.md`);
  fs.writeFileSync(
    filePath,
    `---\ndate: ${date}\n---\ncontent`
  );
}

describe('getAllPosts', () => {
  const originalCwd = process.cwd();

  afterEach(() => {
    process.chdir(originalCwd);
    jest.resetModules();
  });

  test('returns posts sorted in descending date order', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'posts-test-'));
    createMarkdownPost(tempDir, 'first', '2021-01-01');
    createMarkdownPost(tempDir, 'second', '2023-05-10');
    createMarkdownPost(tempDir, 'third', '2022-06-15');

    process.chdir(tempDir);
    jest.resetModules();

    const result = getAllPosts();
    const slugs = result.map(p => p.slug);
    expect(slugs).toEqual(['second', 'third', 'first']);

    fs.rmSync(tempDir, { recursive: true, force: true });
  });
});
