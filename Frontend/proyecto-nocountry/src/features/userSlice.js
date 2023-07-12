import {
    createSlice
} from '@reduxjs/toolkit';


const initialState = {
    nombre: "",
    apellido: "",
    pais: "",
    provincia: "",
    ciudad: "",
    codigoPostal: "",
    email: "",
    password: "",
    logueado: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registrarse: (state, action) => {
            const {
                nombre,
                apellido,
                pais,
                provincia,
                ciudad,
                codigoPostal,
                email,
                password
            } = action.payload.user;
            state.nombre = nombre;
            state.apellido = apellido;
            state.pais = pais;
            state.provincia = provincia;
            state.ciudad = ciudad;
            state.codigoPostal = codigoPostal;
            state.email = email;
            state.password = password;
        },
        loguearse: (state) => {
            state.logueado = true

        },
        cerrarSesion: (state) => {
            state.logueado = false;
        }
    }
})

export const {
    registrarse,
    loguearse,
    cerrarSesion
} = userSlice.actions
export default userSlice.reducer