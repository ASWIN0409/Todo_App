import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../helpers/axiosInstance";

const TodoContext = createContext();

export default function TodoProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const fetchTodos = async () => {
        const response = await axiosInstance.get('api/todos/')
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addNewTask = async (formData) => {
        try {
            const response = await axiosInstance.post('api/todos/add/', formData);
            await fetchTodos();
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    };

    // const updateTask = async = (id) => {
    //     try {
    //         const response = await axiosInstance.put(`api/todos/edit/${id}/`, id);
    //  await fetchTodos();
    //         return response.data;
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };

    const toggleTask = async (id) => {
        try {
            const response = await axiosInstance.patch(`api/todos/toggle/${id}/`);
            await fetchTodos();
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteTask = async (id) => {
        try {
            const response = await axiosInstance.delete(`api/todos/remove/${id}/`);
            await fetchTodos();
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <TodoContext.Provider value={{ tasks, fetchTodos, addNewTask, toggleTask, deleteTask }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodo = () => useContext(TodoContext);