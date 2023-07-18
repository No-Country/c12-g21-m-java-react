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
    jwtToken: "",
    logueado: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loguearse: (state, action) => {
            const {
                name,
                lastName,
                country,
                province,
                city,
                postal,
                email,
                password,
                jwtToken,
            } = action.payload;
            state.name = name;
            state.lastName = lastName;
            state.country = country;
            state.province = province;
            state.city = city;
            state.postal = postal;
            state.email = email;
            state.password = password;
            state.jwtToken = jwtToken;
            state.logueado = true;
        },
        
        cerrarSesion: (state) => {
            state.logueado = false;
        }
    }
})

export const {
    loguearse,
    cerrarSesion,
} = userSlice.actions
export default userSlice.reducer