// SelectedProject Property will be used to store the id of the project if we have multiple projects 
// null if no project is selected and we want to create a new project
// and undefined if we are not adding a new project and neither selecting a project

import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import ProjectsSidebar from './components/ProjectsSideBar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId : null,
      }
    })
  }
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;