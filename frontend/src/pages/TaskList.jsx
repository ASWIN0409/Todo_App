import { useNavigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

function TaskList() {

  const navigate = useNavigate();

  const { tasks, toggleTask, deleteTask } = useTodo();

  // const handleTodoUpdate = async (id) => {
  //   await updateTask(id);
  // }

  const handleTodoToggle = async (id) => {
    await toggleTask(id);
  }

  const handleTodoDelete = async (id) => {
    await deleteTask(id);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        My Tasks
      </h2>

      {tasks.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-700">
            No Tasks Found 😔
          </h3>
          <p className="text-gray-500 mt-2">
            Add your first task above.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                border
                border-gray-100
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* Header */}
              <div className="flex justify-between items-start gap-4">
                <h3 className={`text-xl font-bold text-gray-800 ${task.completed ? "line-through text-gray-400" : ""}`}>
                  {task.title}
                </h3>

                <span
                  onClick={() => handleTodoToggle(task.id)}
                  className={`cursor-pointer px-3 py-1 rounded-full text-sm font-semibold ${task.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </div>

              {/* Description */}
              <p className={`text-gray-600 mt-4 ${task.completed ? "line-through text-gray-200" : ""}`}>
                {task.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  // onClick={() => handleTodoUpdate(task.id)}
                  className="
                    flex-1
                    bg-indigo-600
                    text-white
                    py-2.5
                    rounded-xl
                    font-medium
                    hover:bg-indigo-700
                    transition
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() => handleTodoDelete(task.id)}
                  className="
                    flex-1
                    bg-red-500
                    text-white
                    py-2.5
                    rounded-xl
                    font-medium
                    hover:bg-red-600
                    transition
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => navigate('/')}
        className="
          fixed
          bottom-6
          right-6
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          px-6
          py-4
          rounded-full
          shadow-xl
          flex
          items-center
          gap-2
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          active:scale-95
        "
      >
        <span className="text-2xl leading-none">+</span>
        <span className="hidden sm:inline">Add New Task</span>
      </button>
    </div>
  );
}

export default TaskList;