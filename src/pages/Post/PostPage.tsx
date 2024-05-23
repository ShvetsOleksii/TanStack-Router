import { Post } from 'src/components';
import { type PostType } from 'src/types';

type Props = {
  post: PostType;
};

export const PostPage: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <h3>Selected post page.</h3>
      <Post post={post} />
    </div>
  );
};
