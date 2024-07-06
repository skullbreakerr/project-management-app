import Tasks from "./Tasks"

export default function SelectedProject({ project, handleDelete, onAddTask, onDeleteTask,tasks }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-Us', {
        year: "numeric",
        month: "short",
        day: "numeric"
    })
    return (
        <div className="w-full mt-16 mx-8">
            <header className="pb-4 mb-4 border-b-2 border-stone-200">
                <div className="flex item-center justify-between">
                    <h1 className="text-3xl text-stone-600 mb-2 font-bold">{project.title}</h1>
                    <button
                        className="text-stone-600 hover:text-stone-950"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
                <p className="mb-2 text-stone-400">{formattedDate}</p>
                <p className="mb-2 text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks
                onAddTask={onAddTask}
                onDeleteTask={onDeleteTask}
                tasks={tasks}
            />
        </div>
    )
}