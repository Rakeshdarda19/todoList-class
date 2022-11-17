const initialData = {
  list: [],
};
const todoReducer = (state = initialData, action) => {
  if (action.type === "ADD_TODO") {
    const { id, data } = action.payload;
    return {
      ...state,
      list: [
        ...state.list,
        {
          id: id,
          data: data,
        },
      ],
    };
  }
  if (action.type === "DELETE_TODO") {
    const newList = state.list.filter((elem) => elem.id !== action.id);
    return {
      ...state,
      list: newList,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default todoReducer;
