import { useFetch } from './hooks/fetch';

interface User {
  id: number;
  name: string;
}
function App() {
  // fetch users
  const userInfo = useFetch<User[]>({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
  });

  // fetch invoices
  const invoiceInfo = useFetch({
    url: 'https://jsonplaceholder.typicode.com/invoices',
    method: 'GET',
    headers: {
      'X-platform': 'ios',
    },
  });

  return (
    <>
      {userInfo.loading ? (
        <h1>Loading users...</h1>
      ) : (
        <>
          {userInfo.data && (
            <ul>
              {userInfo.data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
      {invoiceInfo.loading ? (
        <h1>Loading invoices...</h1>
      ) : (
        <>{JSON.stringify(invoiceInfo.data)}</>
      )}
      <div>{userInfo.error && <h1>{userInfo.error}</h1>}</div>
      <div>{invoiceInfo.error && <h1>{invoiceInfo.error}</h1>}</div>
      {/* <ThemedButton />
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <button type="submit">Save {name}</button>
      </form>
      <List items={users} heading={userHeading} addToList={setUsers} />
      <hr />
      <List items={invoices} heading={invoiceHeading} loading={loading} /> */}
    </>
  );
}

export default App;
