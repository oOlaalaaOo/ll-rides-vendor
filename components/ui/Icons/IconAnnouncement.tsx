import IconWrapper from './IconWrapper';

interface IProps {
  className: string;
}

const IconAnnouncement: React.FC<IProps> = ({ className }) => {
  return (
    <IconWrapper className={className}>
      <path d='M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z' />
    </IconWrapper>
  );
};

export default IconAnnouncement;