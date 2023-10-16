import Experiencia from '../components/Experiencia/Experiencia';
import Header from '../components/Header/Header';
import Sobre from '../components/Sobre/Sobre';
import Projetos from '../components/Projetos/Projetos';
import Contatos from '../components/Contatos/Contatos';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <div className='flex flex-col h-[100vh]'>
        <Header />
      <div className="grow relative pt-[100px]">
        <img className='h-full w-full fixed z-[-10] opacity-40' src='/design-elegante-de-fundo-abstrato-de-memphis.jpg'/>
        <Home />
        <Sobre />
        <Experiencia />
        <Projetos />
        <Contatos />
        <Footer />
      </div> 
    </div>
  )    
}

export default App;