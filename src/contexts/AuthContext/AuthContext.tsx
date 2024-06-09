import { ReactNode, createContext, useState } from 'react';
import { USER_AUTH_ROLES } from 'src/constants';

type SelectRole = (
  role?: (typeof USER_AUTH_ROLES)[keyof typeof USER_AUTH_ROLES]
) => void;
type Props = {
  children: ReactNode;
};
type AuthContextType = {
  userRole?: string;
  selectRole: SelectRole;
  logOut: SelectRole;
};

const defaultRole = sessionStorage.getItem('userRole') || undefined;

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [userRole, setUserRole] = useState<string | undefined>(defaultRole);

  const selectRole: SelectRole = (role = '') => {
    setUserRole(role);
  };
  const logOut: SelectRole = () => {
    selectRole();
  };

  return (
    <AuthContext.Provider value={{ userRole, selectRole, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
