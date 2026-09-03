import { getPostById } from '@/api/posts';
import { notFound } from 'next/navigation';
import { JSX } from 'react/jsx-runtime';

export default async function PostPage({
  params,
}: {
  params: { postid: string };
}): Promise<JSX.Element> {
  const { postid } = await params;
  const post = await getPostById(postid);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
