const Sobre = () => {
  return(
    <section id="sobreMim" className='bg-[#AAC3AB]/30 py-20 flex flex-col items-center'>
      <h1 className='text-3xl lg:text-5xl text-center font-bold pt-20 pb-10'>Sobre mim</h1>
      <div className='flex items-center max-w-[1600px] mx-20' >
        <img src='/fotoAtual.jpg' className='h-[300px] w-[250px] pr-5 rounded-t-full lg:block hidden' />   
        <p className='lg:leading-relaxed text-justify text-xl lg:text-3xl text-slate-950'>
          Meu nome é Cecília, tenho 40 anos e moro na cidade do Rio de Janeiro.
          Estou cursando graduação em Análise e Desenvolvimento de Sistemas, na
          modalidade EAD, com previsão de formatura para abril de 2025. 
          Resolvi criar esta página para servir de portfólio e contar sobre a minha 
          transição de carreira de Psicóloga para Desenvolvedora Web.
        </p>
      </div>
    </section>
  );
};

export default Sobre;