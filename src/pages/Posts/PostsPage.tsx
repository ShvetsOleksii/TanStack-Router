import { PostsContainer } from 'src/components';
import { Post } from 'src/types';

type Props = {
  posts: Post[];
};

export const PostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <h3>Posts</h3>

      <PostsContainer posts={posts} />
    </>
  );
};
