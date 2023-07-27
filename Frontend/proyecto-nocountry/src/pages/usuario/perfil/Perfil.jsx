import { useState } from "react";
import CardProfile from "../../../components/Card/CardProfile";
import { useSelector } from "react-redux";

const Perfil = () => {
  const user = useSelector((state) => state.user);
  const [userUpdate, setUserUpdate] = useState(user);

  const handleUpdateUser = (updatedUser) => {
    setUserUpdate(updatedUser);
  };

  return (
    <>
      <CardProfile user={userUpdate} onUpdateUser={handleUpdateUser} />
    </>
  );
};

export default Perfil;
