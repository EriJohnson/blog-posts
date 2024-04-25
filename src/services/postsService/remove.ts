import { httpClient } from "../httpClient";

export async function remove(postId: number) {
  const response = await httpClient.delete(`/posts/${postId}`);

  return response;
}
