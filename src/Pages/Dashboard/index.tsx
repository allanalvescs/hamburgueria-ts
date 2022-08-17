import Header from "../../components/Header";
import { useAuth } from "../../Providers/modules/AuthContext";
import ListProducts from "./ListProducts";

const Dashboard = () => {
  return (
    <>
      <Header />
      <ListProducts />
    </>
  );
};

export default Dashboard;
