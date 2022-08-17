import { Button, Heading } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useAuth } from "../../Providers/modules/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <Header />
    </>
  );
};

export default Dashboard;
