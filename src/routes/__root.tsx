import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="text-sky-400 [&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="text-sky-400 [&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="text-sky-400 [&.active]:font-bold">
          Posts
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
