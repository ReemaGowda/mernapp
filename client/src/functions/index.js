import * as api from '../api';

export const readTodos = async ()=> {
    try {
        const {data} = await api.readTodos()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createTodos = async (todo)=> {
    try {
        const {data} = await api.createTodos(todo)
        return data
    } catch (error) {
        console.log(error)
    }
}


export const deleteTodo = async (id)=> {
    try {
     await api.deleteTodo(id)
        
    } catch (error) {
        console.log(error)
    }
}


