import { useContext } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { AuthContext } from 'src/contexts';
import { router } from 'src/router';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthPage must be used within an AuthContextProvider');
  }
  const auth = authContext;

  return <RouterProvider router={router} context={{ auth }} />;
};
