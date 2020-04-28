interface IProps {
  src: string;
  alt: string;
  width?: string;
}

const Image: React.FC<IProps> = ({ src, alt, width = '100%' }) => {
  return (
    <div style={{ width: width, margin: 'auto' }}>
      <img src={src} alt={alt} style={{ width: '100%' }} className="object-cover object-center" />
    </div>
  );
};

export default Image;
