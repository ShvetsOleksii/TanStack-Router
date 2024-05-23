import { createFileRoute } from '@tanstack/react-router';
import { PostPage } from 'src/pages';
import { type PostType } from 'src/types';

const PostPageWrapper = () => {
  const post = Route.useLoaderData();
  return <PostPage post={post} />;
};

export const Route = createFileRoute('/posts/$postId')({
  component: PostPageWrapper,
  pendingComponent: () => <div>Loading...</div>,
  loader: ({ params }) => getPost(Number(params.postId)),
});

async function getPost(id: PostType['id']): Promise<PostType> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}
