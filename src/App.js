import Layout from "./Components/Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import { CartProvider } from "./Contexts/CartContext";
import { UserProvider } from "./Contexts/UserContext";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <CartProvider>
          <Layout />
        </CartProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
