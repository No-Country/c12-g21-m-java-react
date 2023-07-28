import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cerrarSesion } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { Box } from "@mui/material";

const CerrarSesion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      dispatch(cerrarSesion());
      navigate("/");
    }, 2000);
  });
  return (
    <>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "2rem"        
      }}
    >
      <h3>Cerrando sesión...</h3>
      <Spinner />
    </Box>
    </>
  );
};

export default CerrarSesion;
