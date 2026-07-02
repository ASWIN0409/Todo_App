import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import TodoList from "../pages/TodoList";

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<TodoList />} />
            </Route>
        </Routes>
    );
}

export default Routing;