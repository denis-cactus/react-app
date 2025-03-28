import "./App.css";
import { UserList } from "./components/UserList.jsx";

const users = [
  { id: 1, name: "Іван", email: "ivan@email.com", phone: "123-456-789" },
  {
    id: 2,
    name: "Марія",
    email: "maria@email.com",
    phone: "987-654-321",
  },
  { id: 3, name: "Петро", email: "petro@email.com", phone: "555-666-777" },
];
export default function MyApp() {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
}
