import noProjectImg from '../assets/no-projects.png';
import Button from "./Button"
export default function NoProjectSelected ({handleClick}){

    return(
        <div className="mt-24 text-center w-2/3">
            <img 
            src ={noProjectImg} 
            alt="empty task list"
            className="h-16 w-16 mx-auto"
            />
            <h2 className=' text-xl font-bold  text-stone-500 mt-4 my-4'>no project is selected</h2>
            <p className='text-stone-400 mb-4'>Select a Project or Get Started with a new project.</p>
            <p className='mt-8'>
                <Button onClick={handleClick}>create a new project</Button>
            </p>
        </div>
    )
}