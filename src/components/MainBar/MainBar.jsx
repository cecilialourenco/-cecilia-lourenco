
const MainBar = () => {
  return (
    <nav className='p-3 text-center border-solid border-2 border-violet-300  dark:border-violet-800'>
      <ul className="flex justify-between items-center text-violet-800 dark:text-violet-300">
        <li>
          <a href="#experiencia" >Experiência</a>
        </li>

        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#objetivos">Objetivos</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainBar;