import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

type Props = {
  children: React.ReactNode;
};

type BlogActionType = "ADD_BLOG" | "DELETE_BLOG";

interface IBlogAction {
  type: BlogActionType;
  payload: IBlog;
}

const blogReducer = (state: IBlog[], action: IBlogAction): IBlog[] => {
  switch (action.type) {
    case "ADD_BLOG":
      const blogPost = {
        id: Math.floor(Math.random() * 99999),
        title: `Blog Post #${state.length + 1}`,
      };
      const newState = [...state, blogPost];
      return newState;
    case "DELETE_BLOG":
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });
    default:
      return state;
  }
};

const initialBlog: IBlog[] = [];

const addBlogPost = (dispatch: any) => {
  return () => {
    dispatch({ type: "ADD_BLOG", payload: { title: "Test" } });
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: number) => {
    dispatch({ type: "DELETE_BLOG", payload: { id: id } });
  };
};

//export default BlogContext;
const dataContext = createDataContext(
  blogReducer,
  { addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost },
  []
);
export const { Context, Provider } = dataContext;
