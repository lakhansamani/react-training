import React, { Fragment, useEffect, useState } from 'react';
import { List } from './components/List';
import { ThemedButton } from './components/Button';

function App() {
  const [users, setUsers] = useState<string[]>(['User 1', 'User 2']);
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [invoices, seTInvoice] = useState<string[]>([]);
  const userHeading = 'Users';

  useEffect(() => {
    let isComponentMounted = true;
    // fetch bills
    setLoading(true);
    setTimeout(() => {
      if (isComponentMounted) {
        setLoading(false);
        seTInvoice(['Invoice 1', 'Invoice 2']);
      }
    }, 2000);

    // clean up
    return function () {
      isComponentMounted = false;
    };
  }, []);

  const invoiceHeading = 'Invoices';

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsers([...users, name]);
  };

  return (
    <Fragment>
      <ThemedButton />
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <button type="submit">Save {name}</button>
      </form>
      <List items={users} heading={userHeading} addToList={setUsers} />
      <hr />
      <List items={invoices} heading={invoiceHeading} loading={loading} />
    </Fragment>
  );
}

export default App;
