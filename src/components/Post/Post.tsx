import { type PostType } from 'src/types';

type Props = {
  post: PostType;
};

export const Post: React.FC<Props> = ({
  post: { id, userId, title, body },
}) => {
  return (
    <div>
      <p>userId: {userId}</p>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>body: {body}</p>
    </div>
  );
};
