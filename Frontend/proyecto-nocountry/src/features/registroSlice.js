import {
    createSlice
} from '@reduxjs/toolkit';

const user = {
    nombre: "",
    apellido: "",
    pais: "",
    provincia: "",
    ciudad: "",
    codigoPostal: "",
    email: "",
    password: ""
}
const initialState = user

export const registroSlice = createSlice({
    name: 'registro',
    initialState,
    reducers: {
        registrarse: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { registrarse} = registroSlice.actions
export default registroSlice.reducer