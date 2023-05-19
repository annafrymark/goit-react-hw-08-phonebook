
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import css from './PhonebookPage.module.css';
import { Helmet } from 'react-helmet';

export default function PhonebookPage () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <section className={css.section}>
        <ContactForm />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <div>{isLoading && 'In progress'}</div>
        <ContactList />
      </section>
    </div>
  );
};
