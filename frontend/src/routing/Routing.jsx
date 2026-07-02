import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import TaskForm from "../components/TaskForm";
import TaskList from "../pages/TaskList";

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<TaskForm />} />
                <Route path='/todos' element={<TaskList />} />
            </Route>
        </Routes>
    );
}

export default Routing;