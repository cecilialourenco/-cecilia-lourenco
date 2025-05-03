const Sobre = () => {
  return(
    <section id="sobreMim" className='bg-[#AAC3AB]/30 py-20 flex flex-col items-center'>
      <h1 className='text-3xl lg:text-5xl text-center font-bold pt-20 pb-10'>Sobre mim</h1>
      <div className='flex items-center max-w-[1600px] mx-20' >
        <img src='/fotoAtual.jpg' className='h-[300px] w-[250px] pr-5 rounded-t-full lg:block hidden' />   
        <p className='lg:leading-relaxed text-justify text-xl lg:text-3xl text-slate-950'>
          Meu nome é Cecília, tenho 41 anos e moro na cidade do Rio de Janeiro.
          Sou uma profissional em transição para Gerência de Projetos em TI, combinando 
          3 anos de experiência em tecnologia com 10 anos de Psicologia social/
          institucional em ambientes de alta complexidade.<br></br><br></br>

          Minha trajetória me capacitou a gerenciar stakeholders conflitantes, 
          mediando necessidades técnicas, operacionais e humanas; traduzir 
          demandas não-técnicas em requisitos claros para equipes de 
          desenvolvimento (graças ao duplo background) e otimizar processos com 
          foco em usabilidade e eficiência, sempre aliado a práticas ágeis.<br></br><br></br>

          Busco oportunidades para aplicar essa visão única em projetos de TI, 
          unindo gestão ágil, resiliência organizacional e foco no usuário.
        </p>
      </div>
    </section>
  );
};

export default Sobre;