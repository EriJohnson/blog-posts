import { Post } from "../../types/Post";
import { httpClient } from "../httpClient";

interface PostResponse {
  posts: Post[];
}

export async function findAll() {
  const { data } = await httpClient.get<PostResponse>("/posts");

  return data;
}
