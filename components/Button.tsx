interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  className?: string;
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'button transition-all duration-300 ease-in-out';
  const variantStyles =
    variant === 'outline'
      ? 'bg-transparent border-2 border-[var(--accent)]'
      : 'bg-[var(--accent)] hover:shadow-purple-glow';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
