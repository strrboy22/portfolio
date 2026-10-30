import { useState } from 'react';

interface HistoryLine {
  id: number;
  command: string;
  output?: React.ReactNode;
}

interface TerminalProps {
  name: string;
  profileInfo: {
    age: number;
    address: string;
  };
  socials: {
    github: string;
    linkedIn: string;
    email: string;
  }
  educationalInfo: {
    school: string;
    degree: string;
    certs: string[];
  }
  onOpenProject: () => void;
  onSearchProject: () => void;
}

export const Terminal = ({name, profileInfo, socials, educationalInfo, onOpenProject, onSearchProject}: TerminalProps) => {
  const ASCII_LOGO = `
     ▄      ▄▄▄    ▄▄▄·  ·▄▄▄▄  ▄▄▄·  ▄▄▄ . ▄▄▌       ▄     
    ███     ▀▄ █· ▐█ ▀█  ▐▄▄·  ▐█ ▀█  ▀▄.▀· ██•      ███    
 ▀███████▀  ▐▀▀▄  ▄█▀▀█  ██▪   ▄█▀▀█  ▐▀▀▪▄ ██▪   ▀███████▀ 
   ▀███▀    ▐█•█▌ ▐█ ▪▐▌ ██▌.  ▐█ ▪▐▌ ▐█▄▄▌ ▐█▌▐▌   ▀███▀   
  ▄█▀ ▀█▄   .▀  ▀  ▀  ▀  ▀▀▀    ▀  ▀   ▀▀▀  .▀▀▀   ▄█▀ ▀█▄  
`

  const [history, setHistory] = useState<HistoryLine[]>([]);
  
  const [currentInput, setCurrentInput] = useState("");

  const storeHistory = (command: string, output?: React.ReactNode) => {
    const newLine = {
      id: Date.now(),
      command,
      output
    }
    setHistory(prev => [...prev, newLine]);
    setCurrentInput("");

  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'Enter') {
      const words = currentInput.split(/\s+/);
      // Prevent empty commands
      if (currentInput.trim() === "") return;

      if (words[0] === 'project') {
        const targetWord = words[1];
        if (!targetWord) {
          storeHistory(currentInput, <span className="text-gray-500">Usage: project &lt;project_name&gt;</span>);
          return;
        }
        onOpenProject(targetWord.toLowerCase());
        storeHistory(currentInput, <span className="text-gray-500"> {currentInput}</span>);
        return;
      }

      if (words[0] === 'ls') {
        const projects: string[] = onSearchProject();
        storeHistory(
          currentInput,
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {projects.map((name) => (
              <span key={name} className="text-sky-400 font-bold">
                {name}/
              </span>
            ))}
          </div>
          );
          return;
      }
      
      if (words[0] === 'clear') {
        setHistory((prev) => []);
        setCurrentInput((prev) => "");
        return;
      }
      storeHistory(
        currentInput,
        <span className="text-gray-500">Command not found: {currentInput}</span>
      )

    }
  };

  return (
    <div className="terminal-container flex flex-col font-mono text-sm h-full">
      
      <div className="history-log flex flex-col gap-2">
 
        <div className="fastfetch flex flex-col gap-8 font-mono text-sm text-gray-300 p-4">
      
        <pre className="text-flour font-bold leading-[1.15]">
          {ASCII_LOGO}
        </pre>

        <div className="flex flex-col gap-1">
          
          <div className="mb-2">
            <span className="text-primary font-bold">{name.split(' ')[0].toLowerCase()}</span>
            <span className="text-gray-400">@</span>
            <span className="text-secondary font-bold">portfolio</span>
            <div className="text-gray-600">-------------------</div>
          </div>

          <div className="flex">
              <span className="w-28 text-secondary font-bold">Education:</span>
              <span className="text-sand">{educationalInfo.degree}</span>
          </div>
            
          <div className="flex">
            <span className="w-28 text-secondary font-bold">School:</span>
            <span className="text-sand">{educationalInfo.school}</span>
          </div>

          <div className="flex">
            <span className="w-28 text-secondary font-bold">Basics:</span>
            <span className="text-sand">{profileInfo.age} . {profileInfo.address}</span>
          </div>

          <div className="flex">
            <span className="w-28 text-secondary font-bold">Contact:</span>
            <span className="text-sand">{socials.email}</span>
          </div>

          <div className="flex">
            <span className="w-28 text-secondary font-bold">Socials:</span>
            <span className="text-gray-400">
              <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Github</a>
              {' · '}
              <a href={socials.linkedIn} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </span>
          </div>
          <div className="commands text-xs mt-2 text-gold">
            <span>commands: project [project_name], clear, ls</span>
          </div>
        </div>
    </div>

        {history.map((line) => (
          <div key={line.id}>
            <div className="flex gap-2">
              <span className="text-field">[rafael@portfolio ~]$</span>
              <span className="text-white">{line.command}</span>
            </div>
            <div className="pl-4">
              {line.output}
            </div>
          </div>
        ))}
      </div>

      <div className="active-prompt flex gap-2 mt-2">
        <span className="text-field">[rafael@portfolio ~]$</span>
        <input 
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="bg-transparent border-none outline-none text-white flex-1"
          spellCheck={false}
        />
      </div>

    </div>
  );
};
