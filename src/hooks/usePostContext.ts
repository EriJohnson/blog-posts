import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export function usePostContext() {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("usePostContext deve ser usado dentro de um PostProvider");
  }

  return context;
}
