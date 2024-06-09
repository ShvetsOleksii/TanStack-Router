import { createLazyFileRoute } from '@tanstack/react-router';
import { AuthPage } from 'src/pages';

export const Route = createLazyFileRoute('/auth')({
  component: AuthPage,
});
