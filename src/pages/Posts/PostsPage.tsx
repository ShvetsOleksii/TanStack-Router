import { PostsContainer } from 'src/components';
import { PostType } from 'src/types';

type Props = {
  posts: PostType[];
};

export const PostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <div className="p-4">
      <h3>Posts</h3>

      <PostsContainer posts={posts} />
    </div>
  );
};
