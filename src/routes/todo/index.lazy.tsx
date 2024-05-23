import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/todo/')({
  component: () => <div>Todo Without Id</div>,
});
