export const SET_BLOG = `@@blog/SET_BlOG`;

export const setBlog = (blog) => ({
  type: SET_BLOG,
  payload: blog,
});
export const loadBlog =
  () =>
  (dispatch, _, { client, api }) => {
    client.get(api.BASE_URL).then(({ data }) => dispatch(setBlog(data)));
  };
