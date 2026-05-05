import React from 'react';

interface PanelProps {
  title: string;
  serial?: string;
  children: React.ReactNode;
  warning?: boolean;
}

export default function Panel({ title, serial, children, warning }: PanelProps) {
  return (
    <div className="panel group relative">
      <div className="screw top-2 left-2" />
      <div className="screw top-2 right-2" />
      {warning && <div className="warning-stripe" />}
      
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          {warning && <span className="status-dot animate-pulse" />}
          <h2>{title}</h2>
        </div>
        {serial && <span className="serial-plate">{serial}</span>}
      </div>

      <div className="relative z-10">
        {children}
      </div>

      <div className="ribbed-strip" />
    </div>
  );
}
