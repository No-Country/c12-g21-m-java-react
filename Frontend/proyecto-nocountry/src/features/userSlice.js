import {
    createSlice
} from '@reduxjs/toolkit';


const initialState = {
    email: "",
    idUser: "",
    address: "",
    idCity: "",
    idUserPerson: "",
    newsletter: "",
    phone: "",
    postalCode: "",
    firstName: "",
    lastName: "",
    jwtToken: "",
    logueado: false,
    avatarImage: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loguearse: (state, action) => {
            state.email = action.payload.email;
            state.idUser = action.payload.idUser;
            state.address = action.payload.userPerson.address;
            state.firstName = action.payload.userPerson.firstName;
            state.idCity = action.payload.userPerson.idCity;
            state.idUserPerson = action.payload.userPerson.idUserPerson;
            state.lastName = action.payload.userPerson.lastName;
            state.newsletter = action.payload.userPerson.newsletter;
            state.phone = action.payload.userPerson.phone;
            state.postalCode = action.payload.userPerson.postalCode;
            state.jwtToken = action.payload.jwtToken;
            state.logueado = true;
        },
        cerrarSesion: (state) => {
            state.email = ""
            state.idUser = ""
            state.address = ""
            state.firstName = ""
            state.idCity = ""
            state.idUserPerson = ""
            state.lastName = ""
            state.newsletter = ""
            state.phone = ""
            state.postalCode = ""
            state.jwtToken = ""
            state.logueado = false;
            state.avatarImage = ""
        },
        actualizarImagen: (state, action) => {
            state.avatarImage = action.payload
        }

    }
})

export const {
    loguearse,
    cerrarSesion,
    actualizarImagen
} = userSlice.actions
export default userSlice.reducer