import { Link } from '@tanstack/react-router';
import { Post } from 'src/types';

type Props = {
  posts: Post[];
};

export const PostsContainer: React.FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-[32px]">
      {posts.map(({ userId, id, title, body }) => (
        <Link to={`/posts/${id}`} key={id} className="max-w-[350px]">
          <div className="p-2 shadow-xl hover:shadow-2xl flex flex-col gap-[8px]">
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
