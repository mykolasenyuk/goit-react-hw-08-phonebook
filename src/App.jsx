// import { useState } from 'react';
import React from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../src/redux/contacts';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  // console.log(contacts.length);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <Form />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter />
            <ContactsList />
          </Section>
        )}
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
