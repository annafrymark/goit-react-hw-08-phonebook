import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </section>
      <h1></h1>
      <section className={css.section}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </header>
  );
};
