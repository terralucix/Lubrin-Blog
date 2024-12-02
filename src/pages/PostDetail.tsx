import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { Post } from '../types';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data - replace with actual API call
    const fetchPost = () => {
      const dummyPost: Post = {
        id: 1,
        title: "Getting Started with React and TypeScript",
        excerpt: "Learn how to set up a new React project with TypeScript and best practices for type safety.",
        content: `
          <p>React and TypeScript are a powerful combination for building robust web applications. This guide will walk you through setting up a new project and implementing best practices for type safety.</p>
          
          <h2>Why TypeScript?</h2>
          <p>TypeScript adds static typing to JavaScript, which helps catch errors early in development and improves code maintainability.</p>
          
          <h2>Setting Up Your Project</h2>
          <p>First, create a new project using Vite with the React and TypeScript template...</p>
        `,
        author: "John Doe",
        date: "2024-03-15",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        category: "React"
      };

      setPost(dummyPost);
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">Post not found</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-gray-600 mb-8">
        <span className="flex items-center gap-1">
          <User className="h-5 w-5" />
          {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-5 w-5" />
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </span>
        <span className="text-blue-600 font-medium">{post.category}</span>
      </div>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}