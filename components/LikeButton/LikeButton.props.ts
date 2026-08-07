export interface LikeButtonProps {
  liked: boolean;
  onLike: () => Promise<void> | void;
}
