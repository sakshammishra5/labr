const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    User: {
        isAuthenticated: false,
        user: null
    }
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        changeAuthenticationStatus: (state, action) => {
            state.User.isAuthenticated = action.payload;
            state.User.user = action.payload;
        }
    },
});

// export const { toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;

export const selectDarkMode = (state) => {
    return state.app.darkMode
}