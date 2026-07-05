import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import TaskForm from "../components/TaskForm";
import TaskList from "../pages/TaskList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";

function Routing() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/' element={<Layout />}>
                <Route index element={<TaskForm />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/todos' element={<TaskList />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default Routing;