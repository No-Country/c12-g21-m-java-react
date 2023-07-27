import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { useSelector } from "react-redux";
import { Toaster, toast } from "sonner";

export default function AcordarCompra() {
  const navigate = useNavigate();
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
        toast.success("Mensaje enviado");
        setTimeout(() => {          
          navigate("/miscompras");
        }, 2000);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("El mensaje no fue enviado");
        console.log(error);
      });

    setMessage("");
  };

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Spinner />
        </Box>
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: { xs: "80px", md: "0" },
          }}
        >
          <Card
            sx={{
              minWidth: 275,
              m: { xs: "1rem", md: "2rem" },
              p: "1.5rem",
              borderRadius: "12px",
              textAlign: "left",
            }}
          >
            <Typography variant="h5" gutterBottom>
              ¡Tu reserva se ha realizado con éxito!
            </Typography>
            <CardContent>
              <Typography gutterBottom>Número de reserva: 000{id}</Typography>
              <Typography gutterBottom>
                Precio: ${item.details[0].product.price}
              </Typography>
              <Typography gutterBottom>
                Vendedor: {item.details[0].product.user.userPerson.firstName}{" "}
                {item.details[0].product.user.userPerson.lastName}
              </Typography>
            </CardContent>
            <Typography textAlign="center" gutterBottom>
              <hr></hr>
              Acordar retiro del producto con el vendedor
            </Typography>
            <TextField
              label="Escribe tu mensaje"
              multiline
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "1rem" }}
            />
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" onClick={handleSendMessage}>
                Enviar mensaje
              </Button>
            </CardActions>
          </Card>
          <Toaster richColors position="bottom-right" />
        </Container>
      )}
    </>
  );
}
