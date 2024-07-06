import Button from "./Button"
export default function ProjectSideBar({projects,handleClick,onProjectSelect,selectedProjectId}){
    return(
        <aside className="w-1/3 px-8 py-16  bg-stone-900 text-stone-50 rounded-r-xl md:w-72 ">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50 ">Project</h2>
            <div>
                <Button onClick={handleClick}>+ Add Project</Button>
            </div>
            <ul className="pt-4">
                {/* ....Projects here.. */}
                {projects.map(project=>{
                    return(
                        <li key={project.id} className={`w-full py-1 px-2 my-1  text-left rounded-sm  hover:text-stone-200 hover:bg-stone-800  ${(project.projectId === selectedProjectId)? ' bg-stone-800 text-stone-200' : ' text-stone-400'} `} >
                            <button onClick={()=> onProjectSelect(project.id) }>{project.title}</button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}