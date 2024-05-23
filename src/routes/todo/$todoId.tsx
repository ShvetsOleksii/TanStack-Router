import { createFileRoute } from '@tanstack/react-router';

type Search = {
  page?: number;
};

const TodoId = () => {
  const { todoId } = Route.useParams();
  const { page } = Route.useSearch();
  return (
    <>
      <div>Todo Id: {todoId}</div>
      <div>Page Number: {page}</div>
    </>
  );
};

export const Route = createFileRoute('/todo/$todoId')({
  component: TodoId,
  validateSearch: (search: Record<string, unknown>): Search => {
    return {
      page: search.page ? Number(search.page) || 1 : undefined,
    };
  },
});
