import { Link } from '@tanstack/react-router';
import { PostType } from 'src/types';

type Props = {
  posts: PostType[];
};

export const PostsContainer: React.FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-[32px]">
      {posts.map(({ userId, id, title }) => (
        <Link to={`/posts/${id}`} key={id} className="max-w-[350px]">
          <div className="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs hover:bg-purple-700">
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
