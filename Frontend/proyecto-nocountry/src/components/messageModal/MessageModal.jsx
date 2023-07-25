import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './messageModal-style.css'
import axios from 'axios';
import Spinner from '../spinner/Spinner';
import { Button } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MessageModal({ open, setOpen, id, buyer }) {
    const user = useSelector(state => state.user);
    const handleClose = () => setOpen(false);
    const [messages, setMessages] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)

        axios.get(`https://c12-21-m-java-react-ecommerce.onrender.com/messages/sale/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${user.jwtToken}`,
                }
            })
            .then(response => {
                console.log(response.data);
                setMessages(response.data)

            })
            .catch(error => console.log(error))
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        messages?.length ? messages?.map((message) => (
                            <div key={message.idMessage}> 
                                <p><span className='modal-buyer'>{buyer}:</span><span className='modal-date'>{message.messageDateTime}</span> </p>
                                <p className='modal-message'>
                                    {message.message}
                                </p>
                            </div>
                        )) : <div><p>No hay mensajes</p></div>
                    )}
                    <input type='text'></input>
                    <Button>Responder</Button>

                </Box>
            </Modal>
        </div>
    );
}