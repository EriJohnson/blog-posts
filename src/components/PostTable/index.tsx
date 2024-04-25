import { Post } from "../../types/Post";
import PostTableRow from "./PostTableRow";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

interface PostTableProps {
  posts: Post[];
}

export default function PostTable({ posts }: PostTableProps) {
  return (
    <TableContainer mt={4}>
      <Table size="md" variant="striped">
        <Thead height={10} paddingY={0}>
          <Tr>
            <Th width="1rem" px={4} textAlign="center">
              ID
            </Th>

            <Th>Título</Th>

            <Th>Conteúdo</Th>

            <Th width="1rem" px={4} textAlign="center">
              Ação
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {posts?.map((post) => (
            <PostTableRow key={post.id} post={post} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
