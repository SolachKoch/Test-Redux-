import axios from "axios";

import { faker } from "@faker-js/faker";

//action

export const actionTypes = {
  fetchPost: "FETCH_POST",
  addPost: "ADD_POST",
  editPost: "EDITE_POST",
  deletePost: "DELETE_POST",
  isLoading: "IS_LOADING",
  error: "ERROR",
};

//action creator
export const fetchPost = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.isLoading });
    try {
      const responce = await axios.get("http://localhost:3004/posts");
      dispatch({
        type: actionTypes.fetchPost,
        payload: responce.data,
      });
    } catch (error){
      dispatch({ type: actionTypes.error, payload: error });
    }
  };
};

export const addPost = () => {
  return async (dispatch) => {
    const responce = await axios.post("http://localhost:3004/posts", {
      title: faker.word.words({ count: { min: 3, max: 6 } }),
      body: faker.lorem.lines({ min: 3, max: 6 }),
    });
    dispatch({
      type: actionTypes.addPost,
      payload: responce.data,
    });
  };
};

export const editPost = (id) => {
  return async (dispatch) => {
    try {
      const responce = await axios.put(`http://localhost:3004/posts/${id}`, {
        title: faker.word.words({ count: { min: 3, max: 6 } }),
        body: faker.lorem.lines({ min: 3, max: 6 }),
      });
      dispatch({
        type: actionTypes.editPost,
        payload: responce.data,
      });
    } catch (error) {
      console.error(error); // Log or display error message
    }
  };
};
export const deletePost = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3004/posts/${id}`);
    dispatch({
      type: actionTypes.deletePost,
      payload: id,
    });
  };
};
