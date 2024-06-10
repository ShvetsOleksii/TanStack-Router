import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/for_authorized')({
  beforeLoad: ({ context }) => {
    if (!context.auth.userRole) {
      throw redirect({
        to: '/auth',
      });
    }
  },
  component: () => (
    <div>Hello! You can see this text only if you are authorized user.</div>
  ),
});
