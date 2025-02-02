
const todoLocalStorageKey = "reactTodo";


export const getLocalStorageTodoData= () =>{

    // return JSON.parse(localStorage.getItem(todoLocalStorageKey)) || [];
    return JSON.parse(localStorage.getItem(todoLocalStorageKey)) || [];
}

export const setLocalStorageTodoData = (task) =>{
    return localStorage.setItem("reactTodo", JSON.stringify(task)); 
}



