interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

function Title({ children, className }: TitleProps) {
  return (
    <h2 className={`text-2xl font-semibold text-neutral-300 ${className}`}>
      {children}
    </h2>
  );
}

export default Title;
