interface IHeader {
  title: String;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-3 px-8'>
          <h1 className='text-xl font-bold leading-tight text-gray-900'>
            {title}
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
