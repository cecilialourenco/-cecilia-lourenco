const Home = () => {
  return(
    <div className="bg-cover z-[-10] bg-[url('/design-elegante-de-fundo-abstrato-de-memphis.jpg')] bg-opacity-">
      <img />
      <section className="text-center mx-20 py-20" id="home">
      <h1 className='text-5xl uppercase font-bold leading-loose'>
        olá, eu sou Cecília Lourenço<br/>
        Seja bem-vindo(a) à minha página! =)
      </h1>
      <p className='leading-relaxed text-2xl  pt-10 pb-20'>Sou aluna do curso de Análise e Desenvolvimento de Sistemas e estou em busca
        de oportunidades de estágio em Desenvolvimento Web. 
      </p>
      <button className='rounded-md text-2xl font-bold bg-lime-600 p-5' href="#contatos">CONTATOS</button>
    </section>
    </div>
    
  )
}

export default Home;