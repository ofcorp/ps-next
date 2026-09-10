import { IComment } from '@/interfaces/comment.interface';
import { CommentsProps } from './Comments.props';
import { getComments } from '@/api/comments';
import styles from './Comments.module.css';
import { JSX } from 'react/jsx-runtime';

export default async function Comments({ postId }: CommentsProps): Promise<JSX.Element> {
  const comments: IComment[] = await getComments(postId);
  {
    if (comments.length === 0) {
      return <p>No comments yet.</p>;
    }
  }
  return (
    <div className={styles.wrapper}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <div className={styles.title}>
            <span className={styles.name}>{comment.name}</span>·<span>{comment.email}</span>
          </div>
          <div className={styles.text}>{comment.body}</div>
        </div>
      ))}
    </div>
  );
}
