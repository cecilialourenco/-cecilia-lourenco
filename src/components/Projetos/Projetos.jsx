const Projetos = () => {
  return(
    <div id="projetos" className='bg-[#FC6A26]/30 pt-10' >
      <h1 className='text-5xl text-center font-bold pt-20 pb-10'>Projetos</h1>
      <div className='leading-relaxed items-center text-justify text-3xl text-slate-950 mx-20'>
        <div className='flex flex-row pb-20'>
          <img className='h-[500px] w-[700px]' src="/jokenpo.png" alt="Print da tela inicial do Jokenpo"/>
          <p>
            <b className='uppercase'>Jokenpô</b><br/><br/>
            Projeto proposto pela empresa que eu estagiei como forma de colocar 
            em prática conhecimentos de frontend.
            Para este projeto, foram utilizadas as seguintes linguagens e
            ferramentas: HTML, CSS, JavaScript, Local Storage, Ruby on Rails,
            SQLite e figma.
          </p>
        </div>
        
        <div className='flex flex-row pb-20'>
          <img className='h-[500px] w-[700px]' src="/coinConverter.png" alt="Print da página Coin Converter" />
          <p>
            <b className='uppercase'>Coin Converter</b><br/><br/>
            Projeto de criação própria para fins de prática de ReactJS.
            Trata-se de uma aplicação para converter moedas.
            Para este projeto, foram utilizadas as seguintes linguagens e
            ferramentas: HTML, CSS, JavaScript, ReactJS e Bootstrap.<br/><br/>
          </p>
        </div>
        <div className='flex flex-row pb-20'>
          <img
            className='h-[500px] w-[700px]'
            src="/comidaPraSemana.png"
            alt="Print da página de receitas do site comidaprasemana.com"
          />
          <p>
            <b className='uppercase'>Comida Pra Semana</b><br/><br/>
            Este é também um exemplo de projeto pessoal e que se encontra em
            construção no momento. O <a className='cursor-pointer underline decoration-solid' 
            href="https://www.comidaprasemana.com">Comida Pra Semana</a>{" "}
            tem como objetivo ser um caderno de receitas virtual e um auxiliar na 
            organização das refeições da semana, possibilitando cadastrar receitas,
            criar cardápios e ajudar na montagem de listas de compras. Para este 
            projeto, foram utilizadas as seguintes linguagens e ferramentas: HTML, 
            CSS, Tailwind, TypeScript, ReactJS e Firebase.
          </p>
        </div>        
      </div>
    </div>
  );
};

export default Projetos;