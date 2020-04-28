interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const SpinnerOval: React.FC<IProps> = ({
  width = '30',
  height = '30',
  color = 'black',
}) => {
  return (
    <svg
      viewBox='0 0 38 38'
      xmlns='http://www.w3.org/2000/svg'
      stroke={color}
      width={width}
      height={height}
    >
      <g fill='none' fillRule='evenodd'>
        <g transform='translate(1 1)' strokeWidth='3'>
          <circle strokeOpacity='.2' cx='18' cy='18' r='18' />
          <path d='M36 18c0-9.94-8.06-18-18-18'>
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 18 18'
              to='360 18 18'
              dur='1s'
              repeatCount='indefinite'
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

export default SpinnerOval;