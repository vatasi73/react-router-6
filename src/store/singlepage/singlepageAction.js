export const SET_SINGLEPOST = `@@details/SET_SINGLEPOST`;

const setPostById = (post) => ({
  type: SET_SINGLEPOST,
  payload: post,
});

export const loadPostById =
  (id) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.searchById(id))
      .then(({ data }) => dispatch(setPostById(data)));
  };
