const Sobre = () => {
  return(
    <section id="#sobreMim">
      <h1 className='text-5xl text-center p-10'>Sobre mim</h1>
      <p className='flex items-center  text-justify text-3xl text-slate-950 text-opacity-100 mx-20'>
        <img src='/fotoAtual.jpg' className='h-72 pr-5 rounded-t-full' />  
        Meu nome é Cecília, tenho 39 anos, sou mulher 
        cisgênero, negra e moro na cidade do Rio de Janeiro.
        Estou cursando graduação em Análise e Desenvolvimento de Sistemas, na
        modalidade EAD, com previsão de formatura para abril de 2025. Já sou 
        formada em Psicologia, com cerca de 10 anos de experiência como psicóloga,
        e também sou formada em Banco de Dados.
        Resolvi criar esta página para servir de portfólio e contar sobre a minha 
        transição de carreira de Psicóloga para Desenvolvedora Web. <br/><br/>
      </p>
    </section>
  );
};

export default Sobre;