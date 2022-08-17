import { Button, Heading } from "@chakra-ui/react";
import { useAuth } from "../../Providers/modules/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <Heading>Welcome {user.name}</Heading>
      <Button>Dewslogar</Button>
    </>
  );
};

export default Dashboard;
