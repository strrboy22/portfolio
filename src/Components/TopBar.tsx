export interface BarProps {
  apps: string[];
  os: string;
  showGuide: () => void;
}
export const TopBar = ({os, apps, showGuide }: BarProps) => {
  return (
    <div className="TopBar bg-foreground flex justify-between items-center px-4 py-2 font-mono text-sm font-semibold shadow-md">
      
      <section className="left-side-bar flex items-center gap-6">
        <p className="text-field px-4 border-x border-sand/50">{os}</p>
        
        <p className="text-field">[rafael@portfolio ~]</p>
        
        {apps.map((app, index) => (
          <span key={index} className="bg-gold text-white px-2 py-0.5 rounded shadow-sm">
            {app}
          </span>
        ))}
      </section>

      <section className="right-side-bar flex">
        <div className="apps flex items-center gap-2 px-2">
          <p className="text-sand">{new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" })}</p>
        </div>

        <button 
          onClick={showGuide}
          className="text-field hover:bg-gold hover:text-white px-2 py-0.5 rounded transition-colors"
        >
          ? [guide]
        </button>
      </section>
      
    </div>
  );
};
