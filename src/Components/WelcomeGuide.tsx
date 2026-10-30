export interface WelcomeGuideProps {
  onClose: () => void;
}

export const WelcomeGuide = ({ onClose }: WelcomeGuideProps) => {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50 p-4">
      <div className="bg-amber-100 text-[#664C00] font-mono border border-gray-700 rounded shadow-2xl w-full max-w-2xl p-6">
        <section className="border-b border-gray-700 pb-2 mb-4">
          <p className="text-xs text-black-400 uppercase tracking-widest">welcome.txt</p>
          <h5 className="mt-4 text-sm text-black-200">
            Welcome. This portfolio adopted a terminal-like design. To get started, here are some commands to use:
          </h5>
        </section>

        <div className="flex gap-8 mb-6 text-sm">
          <section className="flex flex-col gap-2 text-black-400 font-bold">
            <p>ls</p>
            <p>cd projects</p>
            <p>open {'<project_name>'}</p>
            <p>less about.md</p>
          </section>
          
          <section className="flex flex-col gap-2 text-[#997300]">
            <p>list what is here</p>
            <p>open projects folder</p>
            <p>open a project</p>
            <p>view content of file</p>
          </section>
        </div>

        <section className="text-xs text-yellow-500 mb-6 italic">
          <p>Tip: output is clickable. No typing needed.</p>
        </section>

        <section className="flex items-center justify-between border-t border-gray-700 pt-4 text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose} 
              className="text-[#FFBF00] hover:bg-green-400 hover:text-black transition-colors px-2 py-1 font-bold"
            >
              [got it]
            </button>
            <p>Esc to close.</p>
          </div>
          
          <form className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="dontshow" 
              name="dontshow" 
              className="accent-green-500"
            />
            <label htmlFor="dontshow" className="cursor-pointer hover:text-gray-200">
              don't show again
            </label>
          </form>
        </section>

      </div>
    </div>
  );
};
