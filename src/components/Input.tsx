// src/components/ui/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`border rounded p-2 ${className}`}
      {...props}
    />
  );
};