import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function Blog({ posts }) {
    const filteredBlogPosts = posts
  return (
    <Layout>
      <NextSeo
        title="Saurish Srivastava: Blog"
        description="Saurish Srivastava's personal thoughts written out."
        canonical="https://saurish.com/blog"
        openGraph={{
          url: "https://saurish.com/blog",
          title: "Saurish Srivastava: Blog",
          description: "Saurish Srivastava's personal thoughts written out."
        }}
      />
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <br />
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}