import { useContext } from 'react';
import { USER_AUTH_ROLES } from 'src/constants';
import { AuthContext } from 'src/contexts';

const { ADMIN, USER } = USER_AUTH_ROLES;

export const AuthPage = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthPage must be used within an AuthContextProvider');
  }

  const { userRole, selectRole, logOut } = authContext;

  return (
    <div className="flex flex-col gap-[16px] p-[16px]">
      <h3>Select your role here:</h3>
      <button
        onClick={() => selectRole(USER)}
        className="px-3 py-1 bg-indigo-500 text-white  rounded-md max-w-[150px]"
      >
        {USER.toUpperCase()}
      </button>
      <button
        onClick={() => selectRole(ADMIN)}
        className="px-3 py-1 bg-indigo-500 text-white  rounded-md max-w-[150px]"
      >
        {ADMIN.toUpperCase()}
      </button>

      <button
        onClick={() => logOut()}
        className={`px-3 py-1 ${userRole ? 'bg-red-500' : 'bg-red-300'} text-white  rounded-md max-w-[150px]`}
        disabled={!userRole}
      >
        Log Out
      </button>

      <h2>
        Your current role:{' '}
        <strong>{userRole?.toUpperCase() || 'Not Authorazed'}</strong>
      </h2>
    </div>
  );
};
