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
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { useSelector } from "react-redux";

export default function AcordarCompra() {
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://c12-21-m-java-react-ecommerce.onrender.com/sales/${id}`, {
        headers: {
          Authorization: `Bearer ${user.jwtToken}`,
        },
      })
      .then((response) => {
        setItem(response.data);        
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, user.jwtToken]);

  const URL = "https://c12-21-m-java-react-ecommerce.onrender.com/messages";

  const handleSendMessage = () => {
    const currentDate = new Date();
    const messageDateTime = currentDate.toISOString();

    axios
      .post(
        URL,
        {
          idSale: item.idSale,
          messageDateTime: messageDateTime,
          message: message,
          idUser: user.idUser,
        },
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setMessage("");
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container maxWidth="sm">
          <Box sx={{ mt: "3rem", textAlign: "center" }}>
            <Typography variant="h4">
              ¡Listo! Tu pedido ha sido realizado con éxito.
            </Typography>
          </Box>
          <Box>
            <Card sx={{ minWidth: 275, mt: "2rem" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  textAlign="center"
                  paddingBottom="2rem"
                >
                  Detalle de tu reserva
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Reserva número: #0000000
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {/* Vendedor: {item?.user?.userPerson?.firstName} */}
                  Vendedor: {item.details[0].product.user.userPerson.firstName}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Ubicación: {item.details[0].product.user.userPerson.address}
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
                onChange={(e) => setMessage(e.target.value)}
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
      )}
    </>
  );
}
