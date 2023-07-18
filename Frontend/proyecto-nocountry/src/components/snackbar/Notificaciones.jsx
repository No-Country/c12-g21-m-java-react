/* eslint-disable react/prop-types */
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notificaciones(props) {
  const [open, setOpen] = React.useState(false);

  // Utiliza la prop booleana para controlar la visibilidad del Snackbar
  React.useEffect(() => {
    setOpen(props.mostrarSnackbar);
  }, [props.mostrarSnackbar]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={props.gravedad}
          sx={{ width: "100%" }}
        >
          {props.mensaje}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
