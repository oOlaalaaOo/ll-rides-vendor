import IconWrapper from './IconWrapper';

interface IProps {
  className: string;
}

const IconUser: React.FC<IProps> = ({ className }) => {
  return (
    <IconWrapper className={className}>
      <path d='M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z' />
    </IconWrapper>
  );
};

export default IconUser;
