import {
    createSlice
} from '@reduxjs/toolkit';


const initialState = {
    name: "",
    surname: "",
    country: "",
    province: "",
    city: "",
    postal: "",
    email: "",
    password: "",
    logueado: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loguearse: (state, action) => {
            const {
                name,
                surname,
                country,
                province,
                city,
                postal,
                email,
                password
            } = action.payload;
            state.name = name;
            state.surname = surname;
            state.country = country;
            state.province = province;
            state.city = city;
            state.postal = postal;
            state.email = email;
            state.password = password;
            state.logueado = true;
            console.log(state)
        },
        cerrarSesion: (state) => {
            state.logueado = false;
        }
    }
})

export const {
    loguearse,
    cerrarSesion
} = userSlice.actions
export default userSlice.reducer