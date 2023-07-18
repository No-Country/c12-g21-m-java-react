import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function AcordarCompra() {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    setMessage("");
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ mt: "3rem", textAlign: "center" }}>
          <Typography variant="h4">
            ¡Listo! Tu pedido ha sido realizado con éxito.
          </Typography>
        </Box>
        <Box>
          <Card sx={{ minWidth: 275, mt: "2rem" }}>
            <CardContent>
              <Typography variant="h5" textAlign="center" paddingBottom="2rem">
                Detalle de tu reserva
              </Typography>
              <Typography variant="h5" gutterBottom>
                Reserva número: #0000000
              </Typography>
              <Typography variant="h5" gutterBottom>
                Vendedor: xxxxxx xxxxxx
              </Typography>
              <Typography variant="h5" gutterBottom>
                Ubicación: xxxxxx xxxxxx
              </Typography>
            </CardContent>
            <Typography
              variant="h5"
              textAlign="center"
              marginTop="2rem"
              gutterBottom
            >
              Acordar retiro de producto con el vendedor
            </Typography>
            <TextField
              label="Escribe tu mensaje"
              multiline
              rows={4}
              value={message}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "1rem" }}
            />
            <CardActions>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button variant="contained" onClick={handleSendMessage}>
                    Enviar mensaje
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}
