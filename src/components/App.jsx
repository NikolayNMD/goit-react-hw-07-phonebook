import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import styled from 'styled-components';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ textAlign: 'center', color: 'white' }}>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 40px;
  margin: 10px;
  background-color: rgba(71, 176, 192, 0.7);
  border-radius: 5px;
`;
