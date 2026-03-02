import { AuthProvider } from "./src/context/AuthContext";
import Rotas from "./src/routes/root";

export default function App() {
  return (
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
  );
}
