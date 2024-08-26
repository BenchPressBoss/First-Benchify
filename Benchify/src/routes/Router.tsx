import { TokenProvider } from '@context/AuthContext'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { NotFound } from '../components/screens/not-found/NotFound'
import { ROUTES } from './routes.data'

const Router = () => {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          {ROUTES.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.auth ? <Navigate to="/login" /> : <route.component />
                }
              />
            );
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
};

export default Router;
