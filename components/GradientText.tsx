interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientText({
  children,
  className = '',
  gradient = 'from-white to-[#9333EA]',
}: GradientTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
