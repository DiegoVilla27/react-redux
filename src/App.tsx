import useApp from "./hooks";

function App() {
  const { user, users, selectedUser } = useApp();

  return (
    <div className="user">
      {users.map((user) => (
        <div
          className="user-item"
          key={user.id}
          onClick={() => selectedUser(user)}
        >
          <h2>{user.name}</h2>
        </div>
      ))}
      {user && (
        <div className="user-selected">
          <h2>Selected User:</h2>
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
