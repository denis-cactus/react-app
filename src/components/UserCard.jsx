export function UserCard({ id, name, email, phone }) {
  return (
    <div key={id}>
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}
