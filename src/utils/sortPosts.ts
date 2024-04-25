import { Post } from "../types/Post";

export function sortPosts(posts: Post[]): Post[] {
  return posts.sort((a, b) => {
    if (a.id && b.id) {
      return b.id - a.id;
    } else {
      return 0;
    }
  });
}
