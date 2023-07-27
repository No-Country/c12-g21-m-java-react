/* eslint-disable react/prop-types */
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Rating
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CardProfile = () => {
  const user = useSelector((state) => state.user);
  const [avatarUploaded, setAvatarUploaded] = useState(null);
  const [rating, setRating] = useState()
  const [isLoading, setIsLoading] = useState(false)
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatarUploaded(file);
  };

  
  const handleUpload = () => {
    if (avatarUploaded) {
      console.log(avatarUploaded);
      const formData = new FormData();
      formData.append("idUser", user.idUser);
      formData.append("multipartFile", avatarUploaded);

      const URL = `https://c12-21-m-java-react-ecommerce.onrender.com/users/uploadavatar`;

      axios
        .post(URL, formData, {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response)    
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  
      useEffect(() => {
        setIsLoading(true)
        axios.get(`https://c12-21-m-java-react-ecommerce.onrender.com/ratings/average/${user.idUser}`,
            {
                headers: {
                    Authorization: `Bearer ${user.jwtToken}`,
                }
            })
            .then(response => setRating(response.data))
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
    }, [])

  useEffect(() => {
    handleUpload();
  }, [avatarUploaded]);

  return (
    <>
      <Container maxWidth="sm">
        <Card
          sx={{
            minWidth: 275,
            m: { xs: "1rem", md: "3rem" },
            p: "2rem",
            borderRadius: "12px",
            textAlign: "left",
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography gutterBottom variant="h5" component="div">
                Mis datos personales
              </Typography>

              <CardContent>
                <Typography variant="body1">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography gutterBottom variant="body1">{user.email}</Typography>
                <Typography variant="body1">Dirección:</Typography>
                <Typography variant="body1">{user.address}</Typography>
                <p>Promedio de calificaciones: </p>
                    {isLoading ? <></> : (<Rating name='half-rating-read' size={"large"} value={rating} precision={0.5} readOnly />)}
              </CardContent>
            </Grid>

            <Grid item>
              <input
                type="file"
                id="avatarInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="avatarInput">
                <Avatar
                  alt={user.firstName}
                  src={user.avatarImage}
                  sx={{ width: "5rem", height: "5rem", cursor: "pointer" }}
                />
              </label>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default CardProfile;

