import React, { createContext, useEffect, useState } from "react";
import { Post } from "../types/Post";
import { postsService } from "../services/postsService";
import { useToast } from "@chakra-ui/react";

// Definindo o tipo para o contexto
interface PostContextType {
  posts: Post[];
  isLoading: boolean;
  addPost(post: Post): void;
}

export const PostContext = createContext<PostContextType>(
  {} as PostContextType
);

// Componente Provider para o contexto de posts
export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  function addPost(post: Post) {
    setPosts([...posts, post]);
  }

  useEffect(() => {
    async function getPosts() {
      try {
        const postsData = await postsService.findAll();
        setPosts(postsData.posts);
      } catch (error) {
        toast({
          status: "error",
          description: "Erro ao buscar dados!",
        });
      } finally {
        setIsLoading(false);
      }
    }

    getPosts();
  }, [toast]);

  return (
    <PostContext.Provider value={{ posts, isLoading, addPost }}>
      {children}
    </PostContext.Provider>
  );
}
