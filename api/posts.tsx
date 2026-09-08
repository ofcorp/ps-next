import { IPost } from '@/interfaces/post.interface';
import { API } from './api';

export async function getPosts(): Promise<IPost[]> {
  const res = await fetch(API.posts, {
    method: 'GET',
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error(`Failed to fetch posts, status: ${res.status}`);
  return res.json();
}

export async function getPostById(id: string): Promise<IPost | null> {
  const res = await fetch(`${API.posts}/${id}`, {
    method: 'GET',
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 },
  });
  if (!res.ok) return null;
  return res.json();
}
