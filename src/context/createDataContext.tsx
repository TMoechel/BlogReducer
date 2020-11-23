import React, { useReducer, Reducer } from "react";

export default (reducer: Reducer<any, any>, actions: any, initialState: []) => {
  const Context = React.createContext<IBlogContext>({
    data: [],
    addBlogPost: () => {},
    deleteBlogPost: (id: number) => {},
  });

  const Provider = ({ children }: any) => {
    // actions == {addBlogPost (dispatch) => return ()=> {}}
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ data: state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
