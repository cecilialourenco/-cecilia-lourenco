import ToggleTheme from '../ToggleTheme/ToggleTheme';

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const Header = () => {
  return (
    <div className="flex justify-between self-baseline items-center p-5 bg-violet-300 dark:bg-violet-800">
      <span className="hidden sm:block text-l text-violet-800 dark:text-violet-300">
        Olá, visitante! <br /> {`${diasDaSemana[hoje.getDay()]}, ${hoje.toLocaleDateString('pt-BR')}`}
      </span>
      <a href='/' className= "text-violet-800 dark:text-violet-300 text-2xl align-center sm:text-4xl cursor-pointer">Cecília Lourenço</a>
      <ToggleTheme />
    </div>
  );
};

export default Header;