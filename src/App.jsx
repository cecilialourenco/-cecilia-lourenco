import Header from './components/Header/Header';
import MainBar from './components/MainBar/MainBar';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <div className='w-screen h-screen '> 
      <Header />
      <MainBar />
      <AboutMe />   
    </div>  
  )    
}

export default App;