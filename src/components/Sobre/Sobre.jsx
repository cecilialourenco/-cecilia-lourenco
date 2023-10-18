const Sobre = () => {
  return(
    <section id="sobreMim" className='bg-[#AAC3AB]/30 p-10'>
      <h1 className='text-5xl text-center font-bold pt-20 pb-10'>Sobre mim</h1>
      <p className='flex items-center leading-relaxed text-justify text-3xl text-slate-950 text-opacity-100 mx-20'>
        <img src='/fotoAtual.jpg' className='h-72 pr-5 rounded-t-full' />  
        Meu nome é Cecília, tenho 39 anos e moro na cidade do Rio de Janeiro.
        Estou cursando graduação em Análise e Desenvolvimento de Sistemas, na
        modalidade EAD, com previsão de formatura para abril de 2025. 
        Resolvi criar esta página para servir de portfólio e contar sobre a minha 
        transição de carreira de Psicóloga para Desenvolvedora Web. <br/><br/>
      </p>
    </section>
  );
};

export default Sobre;