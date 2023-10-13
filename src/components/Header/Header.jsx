import Menu from '../Menu/Menu';
const Header = () => {
  return (
    <div className="flex flex-row p-5 fixed z-10 top-0 h-[100px] w-full bg-white">
      <img 
        src="/fotoAtual.jpg"
        className='h-[60px] w-[60px] rounded-full border-solid border-2 border-orange-600'
      />
      <h1 className='p-3 text-2xl'>CECÍLIA LOURENÇO</h1>
      <Menu /> 
    </div>
  );
};

export default Header;