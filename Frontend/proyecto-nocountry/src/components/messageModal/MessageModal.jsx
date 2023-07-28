import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './messageModal-style.css'
import axios from 'axios';
import { Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    borderRadius: "1em",
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export default function MessageModal({ open, setOpen, id, buyer }) {
    const user = useSelector(state => state.user);
    const handleClose = () => setOpen(false);
    const [messages, setMessages] = useState()
    const [valueText, setValueText] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [reload, setReload] = useState(false)
    const handleSubmit = (e) => {
        const currentDate = new Date();
        const messageDateTime = currentDate.toISOString();
        
        e.preventDefault()
        axios.post("https://c12-21-m-java-react-ecommerce.onrender.com/messages", {
            idSale: id,
            messageDateTime: messageDateTime,
            message: valueText,
            idUser: user.idUser
        },
            {
                headers: {
                    Authorization: `Bearer ${user.jwtToken}`,
                },
            })
            .then(() => {
                setValueText("")
                setReload(true)
            })
    }
    useEffect(() => {
        setReload(false)
        setIsLoading(true)
        axios.get(`https://c12-21-m-java-react-ecommerce.onrender.com/messages/sale/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${user.jwtToken}`,
                }
            })
            .then(response => {
                setMessages(response.data)

            })
            .catch()
       setTimeout(() => {
        setIsLoading(false)
       }, 1000)
    }, [reload])
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='modal-header'>
                        <HighlightOffIcon onClick={() => setOpen(false)} sx={{cursor: "pointer", position: "absolute", right: 0, top: 0, margin: "0.2em", fontSize: "2em"}}/>
                        <h5>Notas</h5>
                        <p>{buyer}</p>
                    </div>
                {isLoading ? (<></>) :
                    messages?.length ? messages?.map((message) => {
                        if (message.idUser !== user.idUser) { return (
                            <div key={message.idMessage}>
                                <div className='modal-text left'><span className='modal-buyer'>{buyer[0]}</span>
                                    <span className='modal-message'>
                                        {message.message}
                                    </span>
                                </div>
                            </div>
                        )} else { return (
                            <div key={message.idMessage}>
                                <div className='modal-text right'>
                                    <span className='modal-message right'>
                                        {message.message}
                                    </span>
                                    <span className='modal-seller'>{user.firstName[0]}</span>
                                    
                                </div>
                            </div>
                        ) }
                    })
                        : <div><p>No hay mensajes</p></div>
                    }
                    <div className='footer-container'>
                        <textarea onChange={(e) => setValueText(e.target.value)} type='text' placeholder='Escribir nota' value={valueText} className='footer-input'></textarea>
                        <div className='footer-button'>
                            <div className='modal-input-seller'>{user.firstName[0]}</div>
                            <Button onClick={handleSubmit} variant="contained" sx={{ background: "#fff", borderRadius: "2em" }}>Enviar</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}