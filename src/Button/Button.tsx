import React, { ReactNode } from 'react';
import './Button.css';

export type ButtonProps = {
  onClick(): void;
  children: ReactNode;
  variant?: 'primary' | 'success';
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled,
}: ButtonProps) {
  const className = `button ${disabled ? 'disabled' : variant}`;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
