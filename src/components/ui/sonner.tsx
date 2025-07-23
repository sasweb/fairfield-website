'use client';

import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    className="toaster group"
    style={
      {
        '--normal-bg': '#fff',
        '--normal-text': '#000d4c',
        '--normal-border': '#000d4c',
      } as React.CSSProperties
    }
    {...props}
  />
);

export { Toaster };
