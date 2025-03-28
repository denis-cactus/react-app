import { UserCard } from "./UserCard.jsx";

export function UserList({ users }) {
  return (
    <div>
      {users.map((users) => (
        <UserCard key={users.id} {...users} />
      ))}
    </div>
  );
}
