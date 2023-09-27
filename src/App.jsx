import { ToastContainer, toast } from "react-toastify";
import AppRoutes from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Providers/UserContext";
import { TechsListProvider } from "./Providers/TechsContext";

function App() {
  return (
    <div className="App">
      <TechsListProvider>
        <UserProvider>
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </UserProvider>
      </TechsListProvider>
    </div>
  );
}

export default App;
