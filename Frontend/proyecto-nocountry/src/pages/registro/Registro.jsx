import {
  Box,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from 'sonner'

export default function Registro() {

  const [condicionesChecked, setCondicionesChecked] = useState(false)
  const [promocionesChecked, setPromocionesChecked] = useState(false)

  const handleRegistro = () => {
    const user = {
      name: nombre,
      lastName: apellido,
      country: pais,
      province: provincia,
      city: ciudad,
      postal: codigoPostal,
      email: email,
      password: password,
      address: address,
      phone: phone
    };
    if (condicionesChecked && user.email && user.password) {
      axios.post('https://c12-21-m-java-react-ecommerce.onrender.com/users/register', {
        email: user.email,
        password: user.password,
        userPerson: {
          firstName: user.name,
          lastName: user.lastName,
          address: user.address, 
          phone: user.phone, 
          newsLetter: promocionesChecked,
          idCity: user.city, 
          postalCode: user.postal
        }
      })
        .then((response) => {
          toast.success('Se ha registrado con éxito')

        })
        .catch((error) => {
          console.log(error)
          toast.error('email existente')

        }) 
        /* if (true) {
          dispatch(registrarse(user));
          toast.success('Se ha registrado con éxito')
        } else {
          toast.error('email existente')
        } */

    }


  }

  /////////////////////////////////

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("")
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const countriesURL =
    "https://c12-21-m-java-react-ecommerce.onrender.com/countries";
  const provincesURL = `https://c12-21-m-java-react-ecommerce.onrender.com/provinces/country/${pais}`;
  const citiesURL = `https://c12-21-m-java-react-ecommerce.onrender.com/cities/province/${provincia}`;

  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(countriesURL);
        setCountries(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const provincesResponse = await axios.get(provincesURL);
        setProvinces(provincesResponse.data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    }

    fetchData();
  }, [provincesURL]);

  useEffect(() => {
    async function fetchData() {
      try {
        const citiesResponse = await axios.get(citiesURL);
        setCities(citiesResponse.data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    }

    fetchData();
  }, [citiesURL]);


  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const datos = {
    //   nombre,
    //   apellido,
    //   pais,
    //   provincia,
    //   ciudad,
    //   codigoPostal,
    //   email,
    //   password,
    // };

    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });

      // axios
      // .post("url", datos)
      // .then((response) => {
      //   console.log("Datos enviados correctamente")
      // })
      // .catch((error) => {
      //   console.error("Error al enviar los datos", error)
      // })

      setNombre("");
      setApellido("");
      setPais("");
      setProvincia("");
      setCiudad("");
      setCodigoPostal("");
      setEmail("");
      setPassword("");
      setCondicionesChecked(false);
      setPromocionesChecked(false);
      setAddress("");
      setPhone("");
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mb: "2rem", mt: "2rem" }}>
        <h1>Registro de usuario</h1>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "grid", gap: 2 }}
        >
          <TextField
            id="nombre"
            label="Nombre"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <TextField
            id="apellido"
            label="Apellido"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />

          <TextField
            id="pais"
            required
            select
            label="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          >
            {countries.map((option) => (
              <MenuItem key={option.idCountry} value={option.idCountry}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="provincia"
            required
            select
            label="Provincia"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
          >
            {provinces.map((option) => (
              <MenuItem key={option.idProvince} value={option.idProvince}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="ciudad"
            required
            select
            label="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            {cities.map((option) => (
              <MenuItem key={option.idCity} value={option.idCity}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="codigoPostal"
            label="Código Postal"
            type="number"
            variant="outlined"
            fullWidth
            required
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
          />

          <TextField
            id="address"
            label="Domicilio"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            id="phone"
            label="Teléfono"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            error={error.error}
            helperText={error.message}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormControlLabel
            required
            control={
              <Checkbox
                checked={condicionesChecked}
                onChange={(e) => setCondicionesChecked(e.target.checked)}
              />
            }
            label="He leído y acepto las condiciones de usos del sitio"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={promocionesChecked}
                onChange={(e) => setPromocionesChecked(e.target.checked)}
              />
            }
            label="Deseo recibir emails y promociones en mi correo electrónico"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleRegistro}
          >
            Crear cuenta
          </Button>
          <Toaster />
        </Box>
      </Container>
    </>
  );
}
