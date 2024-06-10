import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthContextType } from 'src/contexts';

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="text-sky-400 [&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/auth" className="text-sky-400 [&.active]:font-bold">
          Authorization
        </Link>{' '}
        <Link to="/about" className="text-sky-400 [&.active]:font-bold">
          About
        </Link>
        <Link to="/posts" className="text-sky-400 [&.active]:font-bold">
          Posts
        </Link>
        <Link
          to="/for_authorized"
          className="text-sky-400 [&.active]:font-bold"
        >
          For authorized users only
        </Link>
        <Link to="/for_admins" className="text-sky-400 [&.active]:font-bold">
          For administrator
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
