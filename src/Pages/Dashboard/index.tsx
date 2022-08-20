import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Header from "../../components/Header";
import ModalCart from "../../components/Modal/ModalCart";
import ModalLogout from "../../components/Modal/ModalLogout";
import ModalSearch from "../../components/Modal/ModalSearch";
import { useAuth } from "../../Providers/modules/AuthContext";
import { useProducts } from "../../Providers/modules/ProductsContext";

import ListProducts from "./ListProducts";

const Dashboard = () => {
  const {
    isOpen: isModalLogoutOpen,
    onClose: onModalLogoutClose,
    onOpen: onModalLogoutOpen,
  } = useDisclosure();

  const {
    isOpen: isModalCartOpen,
    onClose: onModalCartClose,
    onOpen: onModalCartOpen,
  } = useDisclosure();

  const {
    isOpen: isModalSearchOpen,
    onClose: onModalSearchClose,
    onOpen: onModalSearchOpen,
  } = useDisclosure();

  const { singOut, accessToken, user } = useAuth();
  const { loadCart } = useProducts();

  useEffect(() => {
    if (accessToken) {
      loadCart(user.id, accessToken);
    }
  }, []);

  return (
    <>
      <ModalLogout
        isOpen={isModalLogoutOpen}
        onClose={onModalLogoutClose}
        singOut={singOut}
      />
      <ModalSearch onClose={onModalSearchClose} isOpen={isModalSearchOpen} />
      <ModalCart isOpen={isModalCartOpen} onClose={onModalCartClose} />
      <Header
        onModalLogoutOpen={onModalLogoutOpen}
        onModalCartOpen={onModalCartOpen}
        onModalSearchOpen={onModalSearchOpen}
      />
      <ListProducts />
    </>
  );
};

export default Dashboard;
