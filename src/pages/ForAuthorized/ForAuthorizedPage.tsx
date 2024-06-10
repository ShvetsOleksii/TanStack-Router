import { useContext } from 'react';
import { AuthContext } from 'src/contexts';

export const ForAuthorizedPage = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthPage must be used within an AuthContextProvider');
  }

  const { userRole } = authContext;

  const pageText = userRole
    ? 'Welcome, authorized user!'
    : 'Not authorized. You will be redirected to login page after a few seconds.';
  return <div className="p-2"></div>;
};
