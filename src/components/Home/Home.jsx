const Home = () => {
  return(
    <section id="home" className="flex flex-col items-center justify-center bg-cover h-[100vh] z-[-10] bg-[url('/design-elegante-de-fundo-abstrato-de-memphis.jpg')] text-center py-20">
      <div className='max-w-[1600px] mx-20'>
        <h1 className='text-3xl lg:text-5xl uppercase font-bold lg:leading-loose'>
          olá, eu sou Cecília Lourenço.<br/>
          Seja bem-vindo(a) à minha página! =)
        </h1>
        <p className='lg:leading-relaxed lg:text-2xl pt-10 pb-20'>Sou aluna do curso de Análise e Desenvolvimento de Sistemas e estou em busca
          de oportunidades de estágio em Desenvolvimento Web. 
        </p>
        <a className='rounded-md lg:text-2xl font-bold bg-lime-600 hover:bg-lime-500 p-5' href="#contatos">CONTATOS</a>
      </div>
    </section>
    
  )
}

export default Home;