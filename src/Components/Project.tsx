export interface ProjectProps {
  projectName: string;
  description: string;
  stacks: string[];
  role: string;
  year: string;
  status: boolean;
  type: string;
  mediaPath: string;
  mediaType: 'image' | 'video';
  links: string;
}

export const Project = ({ projectName, description, stacks, role, year, status, type, mediaType, mediaPath, links }: ProjectProps) => {
  return (
    <section className="flex flex-col h-full font-mono text-sm text-gray-300 p-4 gap-5 overflow-y-auto">
      <div className="border-b border-gray-700 pb-2">
        <h2 className="text-xl text-white font-bold"># {projectName}</h2>
        <span className="text-xs text-gray-500">~/projects/{projectName.toLowerCase().replace(/\s+/g, '-')}</span>
      </div>

      <div className="w-full aspect-video p-2 bg-[#0f1015] border border-gray-700 flex items-center justify-center text-gray-600 shadow-inner">
      {mediaType == 'video' ? (
        <video 
          src={mediaPath}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"

        />
      ): (
          <img 
            src={mediaPath}
              alt={`${projectName} preview`}
              className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="grid grid-cols-[80px_1fr] gap-y-2 bg-[#16171d] p-3 border border-gray-800 rounded-sm">
        <span className="text-gray-500">role</span>
        <span className="text-white">{role}</span>
        
        <span className="text-gray-500">year</span>
        <span className="text-white">{year}</span>
        
        <span className="text-gray-500">status</span>
        <span className={status ? "text-green-400" : "text-red-400"}>
          {status ? "[ ACTIVE ]" : "[ INACTIVE ]"}
        </span>
        
        <span className="text-gray-500">type</span>
        <span className="text-white">{type}</span>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="flex flex-col pl-4 text-gray-400 border-l-2 border-gray-700 gap-1">
          <span>- [feature one]</span>
          <span>- [feature two]</span>
          <span>- [feature three]</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-1">
        {stacks.map((stack, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs border border-gray-700 bg-gray-900 text-gray-300 hover:border-gold hover:text-white transition-colors cursor-default"
          >
            {stack}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700">
        {status && (
          <button 
            type="button" 
            className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500 hover:bg-green-500 hover:text-black transition-colors cursor-pointer"
          >
            $ open --live
          </button>
        )}
        <a
          href={links}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-transparent text-gray-400 border border-gray-600 hover:border-white hover:text-white transition-colors cursor-pointer"
        >
          $ open --repo
        </a>
      </div>

    </section>
  );
};
