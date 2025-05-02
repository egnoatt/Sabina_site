"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-800">Blog</h1>
        <p className="mt-2 text-xl text-gray-500">
          Articoli e approfondimenti sulla psicologia e psicoterapia
        </p>
      </motion.section>

      {/* Lista Articoli */}
      <section className="space-y-6 max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="block p-6 rounded-xl bg-gray-50 hover:bg-green-100 transition">
              <h2 className="text-2xl font-semibold text-gray-900">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Call to Action finale */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 max-w-2xl mx-auto text-center"
      >
        <p className="text-lg text-gray-700 mb-6">
          Sei interessato ad approfondire uno di questi argomenti o hai richieste specifiche?
        </p>
        <Link
          href="/contatti"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow transition-colors duration-300"
        >
          Contattami per ulteriori informazioni
        </Link>
      </motion.section>
    </main>
  );
}