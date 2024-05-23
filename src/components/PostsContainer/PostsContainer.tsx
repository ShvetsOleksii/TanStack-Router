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
          <div className="p-2 hover:shadow-md flex flex-col gap-[8px] bg-sky-100">
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
