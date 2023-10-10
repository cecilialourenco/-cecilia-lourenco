const AboutMe = () => {
  return(
    <div>
      <p className='flex items-center text-justify text-2xl text-violet-800 dark:text-violet-300 m-10'>
        <img src='/fotoAtual.jpg' className='h-64 pr-5' /> Olá! =D <br/> Meu nome é Cecília, tenho 39 anos, sou mulher 
        cisgênero, negra e moro na cidade do Rio de Janeiro. <br />
        Estou cursando graduação em Análise e Desenvolvimento de Sistemas, na
        modalidade EAD, com previsão de formatura para abril de 2025. Já sou 
        formada em Psicologia, com cerca de 10 anos de experiência como psicóloga,
        e também sou formada em Banco de Dados. <br />
        Resolvi criar esta página para servir de portfólio e contar sobre a minha 
        transição de carreira de Psicóloga para Desenvolvedora Web. 
      </p>
    </div>
  );
};

export default AboutMe;