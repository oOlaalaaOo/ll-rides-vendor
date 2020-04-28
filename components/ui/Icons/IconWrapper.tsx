interface IProps {
  className: string;
}

const IconWrapper: React.FC<IProps> = ({ className, children }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={`h-6 w-6 fill-current ${className}`}
    >
      {children}
    </svg>
  );
};

export default IconWrapper;
