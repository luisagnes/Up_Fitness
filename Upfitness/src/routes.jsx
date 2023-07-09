// routes
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// pages
import { Home } from './pages/Home/Home';
import { Login } from './pages/Acesso/Login/Login';
import { Cadastro } from './pages/Acesso/Cadastro/Cadastro';
import { RecuperarSenha } from './pages/Acesso/RecuperarSenha/RecuperarSenha';
import { Perfil } from './pages/Dashboard/Perfil/Perfil';
import { Historico } from './pages/Dashboard/Historico/Historico';
import { Page404 } from './pages/Page404/Page404';
import { Header } from './components/Header/Header';
import { Treinos } from './pages/Dashboard/Treinos/Treinos';

import { useAuthValue } from './context/authContext';

export const AppRoutes = () => {
  const { user } = useAuthValue();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/perfil" />}
        />
        <Route
          path="/cadastro"
          element={!user ? <Cadastro /> : <Navigate to="/perfil" />}
        />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/treinos" element={user ? <Treinos /> : <Navigate to="/login" />} />
        <Route path="/perfil" element={user ? <Perfil /> : <Navigate to="/login" />} />
        <Route path="/historico" element={user ? <Historico /> : <Navigate to="/login" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
