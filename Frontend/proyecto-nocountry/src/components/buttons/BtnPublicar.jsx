import "../buttons/buttons.css"
import { Button } from "@mui/material"

const BtnPublicar = () => {
  return (
    <div className="btnPublicar">
        <Button className="btnPublicarActive" sx={{bgcolor: "#9f9f9f", color: "white", width: "70%", margin: "3rem 0", padding: ".6rem 0"}}>Publicar</Button>
    </div>
  )
}

export default BtnPublicar