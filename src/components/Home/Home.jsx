const Home = () => {
  return(
    <section className='m-20 text-center pb-20' id="home">
      <h1 className='text-5xl uppercase font-bold leading-loose'>
        hey, eu sou Cecília Lourenço<br/>
        Seja bem-vindo(a) à minha página! =)
      </h1>
      <p className='leading-relaxed text-2xl pt-10 pb-20'>Sou estudante de Análise e Desenvolvimento de Sistemas e estou em busca
        de oportunidades de estágio em Desenvolvimento Web. Criei esta página para
        divulgar os meu conhecimentos, experiência e projetos.
      </p>
      <button className='rounded-md text-2xl font-bold bg-lime-600 p-5' href="#contatos">CONTATOS</button>
    </section>
  )
}

export default Home;