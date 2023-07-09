import './App.css';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthtication';

//context
import { AuthProvider } from './context/authContext';

// routes
import { AppRoutes } from './routes';

export const App = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    };
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{user}}>
      <AppRoutes />
    </AuthProvider>
  );
};
