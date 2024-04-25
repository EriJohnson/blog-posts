import { Post } from "../../types/Post";
import { httpClient } from "../httpClient";

export async function findAll() {
  const response = await httpClient.get<Post[]>("/posts");

  return response;
}
