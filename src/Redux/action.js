
export const createTodo = (title, text) => {
    return {
      type: 'createTodo',
      payload: { title, text }
    };
  };
export const removeTodo=(id)=>{
    return ({
        type:'removeTodo',
        payload:id
    })
}
export const editTodo=(data)=>{
    return ({
        type:'ediTodo',
        payload:data
    })
}