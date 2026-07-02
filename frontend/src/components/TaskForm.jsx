import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

function TaskForm() {

    const navigate = useNavigate();
    const { addNewTask } = useTodo();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.description.trim()) return;
        await addNewTask(formData);
        setFormData({
            title: "",
            description: "",
        });
        navigate('/todos');
    };

    const onChangeHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
            {/* Background Blobs */}
            <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="w-full max-w-xl">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">
                            Create New Task
                        </h1>
                        <p className="text-gray-300 mt-2">
                            Organize your work beautifully.
                        </p>
                    </div>

                    <form
                        onSubmit={formSubmitHandler}
                        className="space-y-6"
                    >
                        {/* Title */}
                        <div>
                            <label className="block text-gray-200 mb-2 font-medium">
                                Task Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                placeholder="Enter task title..."
                                value={formData.title}
                                onChange={onChangeHandler}
                                className="
                                    w-full
                                    rounded-2xl
                                    bg-white/10
                                    border border-white/20
                                    px-5
                                    py-4
                                    text-white
                                    placeholder:text-gray-400
                                    outline-none
                                    transition-all
                                    duration-300
                                    focus:border-cyan-400
                                    focus:ring-4
                                    focus:ring-cyan-500/20
                "
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-200 mb-2 font-medium">
                                Description
                            </label>

                            <textarea
                                name="description"
                                rows="5"
                                placeholder="Write your task details..."
                                value={formData.description}
                                onChange={onChangeHandler}
                                className="
                                    w-full
                                    rounded-2xl
                                    bg-white/10
                                    border border-white/20
                                    px-5
                                    py-4
                                    text-white
                                    placeholder:text-gray-400
                                    outline-none
                                    resize-none
                                    transition-all
                                    duration-300
                                    focus:border-purple-400
                                    focus:ring-4
                                    focus:ring-purple-500/20
                "
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="
                                w-full
                                rounded-2xl
                                bg-gradient-to-r
                                from-cyan-500
                                to-purple-600
                                py-4
                                text-lg
                                font-semibold
                                text-white
                                shadow-lg
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                hover:shadow-cyan-500/30
                                active:scale-95
                            "
                        >
                            ✨ Create Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;