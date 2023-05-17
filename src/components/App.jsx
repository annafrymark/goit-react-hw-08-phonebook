import React, { useEffect, lazy } from 'react';
//import css from './app.module.css';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );

  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectIsLoading);
  //   const error = useSelector(selectError);

  //   useEffect(() => {
  //     dispatch(fetchContacts())
  //   }, [dispatch])

  //   return (
  //     <div className={css.container}>
  //       <h1>Phonebook</h1>
  //       <ContactForm />
  //       {isLoading && !error && <h4>Loading, please wait...</h4>}
  //       {error}
  //       <h2>Contacts</h2>
  //       <Filter />
  //       <ContactList />
  //     </div>
  //   );
};

export default App;
