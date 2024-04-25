import { Tr, Td } from "@chakra-ui/react";
import { Post } from "../../../types/Post";
import { usePostContext } from "../../../hooks/usePostContext";
import { DeleteButton } from "./DeleteButton";

interface PostTableRowProps {
  post: Post;
}

export default function PostTableRow({ post }: PostTableRowProps) {
  const { deletePost } = usePostContext();

  async function handleDelete() {
    await deletePost(post.id);
  }

  return (
    <Tr sx={{ td: { height: 10, py: 0 } }}>
      <Td width="1rem" px={4} textAlign="center">
        {post?.id}
      </Td>

      <Td isTruncated maxWidth="9rem">
        {post?.title}
      </Td>

      <Td isTruncated maxWidth="8rem">
        {post?.body}
      </Td>

      <Td width="1rem" px={4} textAlign="center">
        <DeleteButton aria-label="Deletar" onClick={() => handleDelete()} />
      </Td>
    </Tr>
  );
}
