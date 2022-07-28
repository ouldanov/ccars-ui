import React, { ReactNode } from 'react';
import './Button.css';

export type ButtonProps = {
  onClick(): void;
  children: ReactNode;
  type?: 'primary' | 'primary-round' | 'secondary' | 'link';
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  children,
  onClick,
  type = 'primary',
  disabled,
  className = '',
}: ButtonProps) => {
  const cls = ['btn', type, className];
  if (className) cls.push(className);
  if (disabled) cls.push('disabled');
  return (
    <button className={cls.join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
