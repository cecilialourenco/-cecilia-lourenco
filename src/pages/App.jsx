import Experiencia from '../components/Experiencia/Experiencia';
import Header from '../components/Header/Header';
import Sobre from '../components/Sobre/Sobre';
import Projetos from '../components/Projetos/Projetos';
import Objetivos from '../components/Objetivos/Objetivos';

const App = () => {
  return (
    <div className='flex flex-col h-[100vh]'>
        <Header />
      <div className="grow relative pt-[100px]">
        <img className='h-full w-full fixed z-[-10] opacity-40' src='/design-elegante-de-fundo-abstrato-de-memphis.jpg'/>
        <Sobre />
        <Experiencia />
        <Projetos />
        <Objetivos />
      </div> 
    </div>
  )    
}

export default App;