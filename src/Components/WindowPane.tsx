import React from 'react';

export interface WindowPaneProps {
  windowName: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const WindowPane = ({ windowName, children, onClose }: WindowPaneProps) => {
  return (
    <div className="window flex-1 min-w-0 border border-field shadow-lg font-mono overflow-hidden h-full flex flex-col">
      <section className="title-bar border-b border-field flex items-center gap-3 p-2 text-sm bg-foreground/10 justify-between">
        <div className="flex gap-3 items-center">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-field font-bold">{windowName}</span>
        </div>
        
        {windowName === 'project' && (
          <button type="button" aria-label="Close window"  onClick={onClose}>x</button>
        )}
      </section>

      <section className="window-app flex-1 min-h-0 overflow-y-auto relative">
        {children}
      </section>

    </div>
  );
};
