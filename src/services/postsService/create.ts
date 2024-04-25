import { Post } from "../../types/Post";
import { httpClient } from "../httpClient";

export async function create(payload: Post): Promise<Post> {
  const response = await httpClient.post<Post>("/posts", payload);

  return response.data;
}
