interface TitleProps {
  children: React.ReactNode;
}

function Title({children}: TitleProps) {
  return (
    <h2 className="text-2xl font-semibold text-neutral-300">
      {children}
    </h2>
  );
}

export default Title
