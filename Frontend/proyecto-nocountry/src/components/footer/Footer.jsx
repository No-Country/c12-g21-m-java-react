import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled("footer")({
  backgroundColor: "#AFBA7C",
  padding: "10px",
  textAlign: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Re-House. Todos los derechos reservados.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
