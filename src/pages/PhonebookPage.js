import { AppBar } from '../components/AppBar/AppBar';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function PhonebookPage () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <ContactForm />
      <div>{isLoading && 'In progress'}</div>
      <ContactList />
    </div>
  );
};
