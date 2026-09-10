import { IComment } from '@/interfaces/comment.interface';
import { API } from './api';

export async function getComments(id: number): Promise<IComment[]> {
  const res = await fetch(API.comments + id, {
    method: 'GET',
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error(`Failed to fetch comments, status: ${res.status}`);
  return res.json();
}
