export const selectToken = (state) => state.users.token;

export const selectUserName = (state) => state.users.user?.name;

export const selectUser = (state) => state.users.user;

export const selectUsersIsError = (state) => state.users.isError
