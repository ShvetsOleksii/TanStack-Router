import { createFileRoute } from '@tanstack/react-router';
import { PostsPage } from 'src/pages';
import { Post } from 'src/types';

const PostsPageWrapper = () => {
  const posts = Route.useLoaderData();
  return <PostsPage posts={posts} />;
};

export const Route = createFileRoute('/posts/')({
  loader: getAllPosts,
  pendingComponent: () => <div>Loading...</div>,
  component: () => <PostsPageWrapper />,
});

async function getAllPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}
