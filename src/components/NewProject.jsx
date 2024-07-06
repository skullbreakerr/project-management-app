import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, handleCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const dialogRef = useRef(); 


    function handleSaveProj() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
        // Validations... //
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            dialogRef.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={dialogRef} buttonCaption={'Close'}>
                <h1 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h1>
                <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please Make sure you provide a valid value for every input field</p>
            </Modal>
            <div className="px-4 w-2/3 ">
                <menu className="flex item-center justify-end gap-4 my-4">
                    <li>
                        <button className="px-6 py-2 font-bold uppercase text-stone-800 hover:text-stone-950" onClick={handleCancel}>cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md uppercase bg-stone-950 text-stone-50 hover:bg-stone-950" onClick={handleSaveProj} >save</button>
                    </li>
                </menu>
                <div>
                    <Input type='text' ref={titleRef} title={"Title"} />
                    <Input ref={descriptionRef} title={"Description"} textArea />
                    <Input type='date' ref={dueDateRef} title={"Due Date"} />
                </div>
            </div>
        </>
    )
}