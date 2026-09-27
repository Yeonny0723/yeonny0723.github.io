import type { HTMLAttributes } from 'react';

export function Prose({ html, className, ...props }: { html: string } & HTMLAttributes<HTMLDivElement>) {
  return <div className={`prose${className ? ` ${className}` : ''}`} dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}
