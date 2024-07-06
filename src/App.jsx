import React, { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

const INITIAL_PROJECT_VAL = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
}

function App() {
  const [projectState, setProjectStates] = useState(INITIAL_PROJECT_VAL);

  // Setting the current Project selected with passing its Id //
  function handleSelectProject(id) {
    setProjectStates(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: id,
      }
    })
  }
  function handleStartAddingProject() {
    setProjectStates(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: null,
      }
    })
  }
  //  Cancel Button functionality
  function handleCancel() {

    setProjectStates(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
      }
    })
  }
  //  Adding the Projects to the Project Array and Setting the selectedProjectId to "undefined" //
  function addProjects(projectData) {
    setProjectStates(prevStates => {
      const projId = Math.random();
      const newProject = {
        ...projectData,
        id: projId,
      }

      return {
        ...prevStates,
        selectedProjectId: undefined,
        projects: [...prevStates.projects, newProject],
      }
    })

    console.log(projectState);
  }

  function handleDeleteProject() {
    setProjectStates(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter(item => item.id !== prevProjectState.selectedProjectId)

      }
    })
  }

  function handleAddTask(taskData) {
    setProjectStates(prevStates => {
      const taskId = Math.random();
      const newTasks = {
        text: taskData,
        projectId: prevStates.selectedProjectId,
        id: taskId,
      }
      console.log(prevStates.selectedProjectId)
      return {
        ...prevStates,
        tasks: [newTasks, ...prevStates.tasks],
      }
    })

    console.log(projectState);
  }

  function handleDeleteTask(id) {
    setProjectStates(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(item => item.id !== id)

      }
    })
  }

  // Conditionally rendering the Components //
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      handleDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks.filter(task =>{ task.projectId === selectedProject.id})}
    />)

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={addProjects} handleCancel={handleCancel} />
  }
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleClick={handleStartAddingProject} />
  }

  return (
    <main className="h-screen my-8 flex" >
      <ProjectSideBar
        projects={projectState.projects}
        handleClick={handleStartAddingProject}
        onProjectSelect={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
