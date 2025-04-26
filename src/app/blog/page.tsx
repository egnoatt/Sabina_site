import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

function getPosts() {
  const fileNames = fs.readdirSync(blogDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  // Ordinamento degli articoli per data dal più recente al meno recente
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function Blog() {
  const posts = getPosts();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block p-6 rounded-xl bg-gray-50 hover:bg-green-100 transition">
              <h2 className="text-2xl font-semibold text-gray-900">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}