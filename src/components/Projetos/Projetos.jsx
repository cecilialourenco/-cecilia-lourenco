const Projetos = () => {
  return(
    <section id="projetos" className='bg-[#FC6A26]/30 py-20 flex flex-col items-center' >
      <h1 className='text-3xl lg:text-5xl text-center font-bold pt-20 pb-10'>Projetos</h1>
      <div className='max-w-[1600px] mx-20'>
        <div className='items-center text-justify text-3xl text-slate-950'>
          <div className='lg:grid grid-cols-2 gap-4 content-center pb-10'>
            <img className='lg:h-[500px] lg:w-[700px]' src="/jokenpo.png" alt="Print da tela inicial do Jokenpo"/>
            <div className='flex flex-col justify-center'>
              <h2 className='uppercase font-bold text-[20px] lg:text-[30px] mb-2'>Jokenpô </h2>
              <p className='text-xl lg:text-2xl lg:leading-relaxed'>
                Projeto proposto pela empresa que eu estagiei como forma de colocar 
                em prática conhecimentos de frontend.
                Para este projeto, foram utilizadas as seguintes linguagens e
                ferramentas: HTML, CSS, JavaScript, Local Storage, Ruby on Rails,
                SQLite e figma.
              </p>
            </div>    
          </div>
          
          <div className='lg:grid grid-cols-2 gap-4 content-center pb-10'>
            <img className='lg:h-[500px] lg:w-[700px]' src="/coinConverter.png" alt="Print da página Coin Converter" />
            <div className='flex flex-col justify-center'>
              <h2 className='uppercase font-bold text-[20px] lg:text-[30px] mb-2'>Coin Converter </h2>
              <p className='text-xl lg:text-2xl lg:leading-relaxed'>
                O <a className='cursor-pointer underline decoration-solid' 
                href="https://coin-converter-one.vercel.app">Coin Converter</a>{" "} é um projeto de criação própria para 
                fins de prática de ReactJS.
                Trata-se de uma aplicação para converter moedas.
                Para este projeto, foram utilizadas as seguintes linguagens e
                ferramentas: HTML, CSS, JavaScript, ReactJS e Bootstrap.
              </p>
            </div>
          </div>
          
          <div className='lg:grid grid-cols-2 gap-4 content-center'>
            <img
              className='lg:h-[500px] lg:w-[700px]'
              src="/comidaPraSemana.png"
              alt="Print da página de receitas do site comidaprasemana.com"
            />
            <div className='flex flex-col justify-center'>
              <h2 className='uppercase font-bold text-[20px] lg:text-[30px] mb-2'>Comida Pra Semana</h2>
              <p className='text-xl lg:text-2xl lg:leading-relaxed'>
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
      </div>
    </section>
  );
};

export default Projetos;