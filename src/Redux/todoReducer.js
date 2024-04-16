import { nanoid } from 'nanoid';
const initialState = {
//   todo: storedTodoList || [{ id: 1, title: "sanghalaye", text: "hello world" }]
  todo: [{ id: 1, title: "sanghalaye", text: "hello world" }]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createTodo':
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        text: action.payload.text
      };
      const updatedTodoList = [...state.todo, newTodo];
      // Save updated todo list to local storage
      localStorage.setItem('todos', JSON.stringify(updatedTodoList));
      return {
        ...state,
        todo: updatedTodoList
      };
    case 'removeTodo':
      const filteredTodoList = state.todo.filter(todo => todo.id !== action.payload);
      // Save updated todo list to local storage
      localStorage.setItem('todos', JSON.stringify(filteredTodoList));
      return {
        ...state,
        todo: filteredTodoList
      };
    default:
      return state;
  }
};
