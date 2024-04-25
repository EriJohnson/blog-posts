import React, { createContext, useEffect, useState } from "react";
import { Post } from "../types/Post";
import { postsService } from "../services/postsService";
import { useToast } from "@chakra-ui/react";
import { sortPosts } from "../utils/sortPosts";

interface PostContextType {
  posts: Post[];
  isLoading: boolean;
  isSubmitting: boolean;
  addPost(post: Post): Promise<void>;
  deletePost(postId: number): Promise<void>;
}

export const PostContext = createContext<PostContextType>(
  {} as PostContextType
);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await postsService.findAll();

        setPosts(response.data);
      } catch (error) {
        toast({
          status: "error",
          description: "Erro ao buscar dados!",
        });
      } finally {
        setIsLoading(false);
      }
    }

    if (!posts.length) {
      getPosts();
    }
  }, [posts.length, toast]);

  async function addPost(post: Post) {
    setIsSubmitting(true);

    try {
      const createdPost = await postsService.create(post);

      setPosts([...posts, createdPost]);

      toast({
        status: "success",
        description: "Post cadastrado com sucesso!",
      });
    } catch (error) {
      toast({
        status: "error",
        description: "Erro ao cadastrar post!",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function deletePost(postId: number) {
    setIsLoading(true);

    try {
      await postsService.remove(postId);

      setPosts((prevPosts) =>
        prevPosts.filter((prevPost) => prevPost.id !== postId)
      );

      toast({
        status: "success",
        description: "Post excluído com sucesso!",
      });
    } catch (error) {
      toast({
        status: "error",
        description: "Erro ao excluir post!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const sortedPosts = sortPosts(posts);

  return (
    <PostContext.Provider
      value={{
        posts: sortedPosts,
        isLoading,
        isSubmitting,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
