import { useDisclosure } from "@chakra-ui/react";
import Header from "../../components/Header";
import ModalLogout from "../../components/Modal/ModalLogout";
import { useAuth } from "../../Providers/modules/AuthContext";

import ListProducts from "./ListProducts";

const Dashboard = () => {
  const {
    isOpen: isModalLogoutOpen,
    onClose: onModalLogoutClose,
    onOpen: onModalLogoutOpen,
  } = useDisclosure();

  const { singOut } = useAuth();
  return (
    <>
      <ModalLogout
        isOpen={isModalLogoutOpen}
        onClose={onModalLogoutClose}
        singOut={singOut}
      />
      <Header onModalLogoutOpen={onModalLogoutOpen} />
      <ListProducts />
    </>
  );
};

export default Dashboard;
