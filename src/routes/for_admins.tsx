import { createFileRoute, redirect } from '@tanstack/react-router';
import { USER_AUTH_ROLES } from 'src/constants';

export const Route = createFileRoute('/for_admins')({
  beforeLoad: ({ context }) => {
    if (context.auth.userRole !== USER_AUTH_ROLES.ADMIN) {
      throw redirect({
        to: '/auth',
      });
    }
  },
  component: () => (
    <div>Hello! You can see this text only if you are administrator.</div>
  ),
});
