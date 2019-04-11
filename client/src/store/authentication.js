
export default {
  namespaced: true,
  state: {
    registerEmail: null,
    registerPassword: null,
  },
  mutation: {
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
