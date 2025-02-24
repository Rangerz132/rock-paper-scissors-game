const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div>
      <button {...props} className={`${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
