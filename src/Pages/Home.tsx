import { useState } from 'react';
import { TopBar, Terminal, WelcomeGuide, WindowPane, Project } from '../Components';

import { Data } from '../Types';

export const Home = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const [isActiveWindow, setIsActiveWindow] = useState([
    {id: 1, type: "terminal", targetProject: null}
  ]);
  
  const guideHandler = () => setIsGuideOpen((value) => !value);

  const handleOpenProject = (projectName: string) => {
  if (isActiveWindow.length >= 2) {
    console.error("close the open window first. Max Window: 2");
    return;
  }
  setIsActiveWindow(prev => [
    ...prev,
    { id: Date.now(), type: "project", targetProject: projectName },
  ]);
};

  const handleCloseProject = (id: number) => {
    setIsActiveWindow(prev => prev.filter(win => win.id !== id));
    return;
  }
  
  const getProject = (): string[] => {
    return Data.projects.map(({projectName})  => projectName);
  }

  return (
    <main className="Home h-screen flex flex-col bg-bg overflow-hidden">
      <TopBar 
        name="guest" 
        os="Linux" 
        apps={isActiveWindow.map(({type}) => `${type}`)}
        showGuide={guideHandler}
      />
      
      {isGuideOpen && <WelcomeGuide onClose={guideHandler} />}
      
      <div className="flex-1 flex p-2 gap-2 overflow-hidden">
        {isActiveWindow.map((win) => {
          
          // --- TERMINAL ---
          if (win.type === 'terminal') {
            return (
              <WindowPane key={win.id} windowName={win.type}>
                <Terminal
                  name={Data.name}
                  profileInfo= {Data.profileInfo}
                  socials={Data.socials}
                  educationalInfo={Data.educationalInfo}
                  onOpenProject={handleOpenProject}
                  onSearchProject={getProject}
                />
              </WindowPane>
            )
          } 
          
          // --- PROJECT ---
          else if (win.type === 'project') {

            const foundProject = Data.projects.find(
              (project) => project.projectName === win.targetProject
            );

            if (!foundProject) {
              return console.error("project not found.")
            }

            return (
              <WindowPane key={win.id} windowName={`${win.type}`} onClose={() => handleCloseProject(win.id)}>
                <Project
                  {...foundProject}
                />
              </WindowPane>
            )
          }
        })}
      </div>
    </main>
  )
}
