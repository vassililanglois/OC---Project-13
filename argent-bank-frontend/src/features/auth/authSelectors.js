// Auth selectors to get auth informations in the state

export const getToken = (state) => state.auth.token;
export const getIsAuthenticated = (state) => state.auth.isAuthenticated;
