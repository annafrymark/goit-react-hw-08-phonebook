import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContainer } from '../AppContainer/AppContainer';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

// <main className={css.container}>{children}</main>;
