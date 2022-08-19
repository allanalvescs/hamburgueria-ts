import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Header from "../../components/Header";
import ModalLogout from "../../components/Modal/ModalLogout";
import { useAuth } from "../../Providers/modules/AuthContext";
import { useProducts } from "../../Providers/modules/ProductsContext";

import ListProducts from "./ListProducts";

const Dashboard = () => {
  const {
    isOpen: isModalLogoutOpen,
    onClose: onModalLogoutClose,
    onOpen: onModalLogoutOpen,
  } = useDisclosure();

  const { singOut, accessToken, user } = useAuth();
  const { cartProducts, loadCart } = useProducts();

  useEffect(() => {
    if (accessToken) {
      loadCart(user.id, accessToken);
    }
  }, []);

  console.log(cartProducts);

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
