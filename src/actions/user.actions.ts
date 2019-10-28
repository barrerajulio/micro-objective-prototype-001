export const getUsers = () => dispatch => {
  dispatch({
    type: 'getUsers',
    payload: [{username: 'barrerajulio'}, {username: 'hdstryowrld'}],
  });
};

export const getProfile = () => dispatch => {
  dispatch({
    type: 'getProfile',
    payload: {
      username: 'juliobarreraa',
      name: 'Julio',
      second_name: 'César',
      last_name: 'Barrera',
      second_last_name: 'Andrade',
    },
  });
};
