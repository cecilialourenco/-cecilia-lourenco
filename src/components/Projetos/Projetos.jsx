const Projetos = () => {
  return(
    <div id="projetos" className='bg-[#faddcf]/30 pt-10' >
      <h1 className='text-5xl text-center font-bold pt-20 pb-10'>Projetos</h1>
      <div className='leading-relaxed items-center text-justify text-3xl text-slate-950 mx-20'>
        <p>
          Pelo estágio que realizei, desenvolvi um Jokenpô (joguinho da pedra,
          papel e tesoura) onde tive a oportunidade de fazer um programa
          utilizando o layout feito por um designer, conheci o figma e até
          aprendi a utilizar essa ferramenta para desenvolver o meu próprio
          layout. Para esse projeto, foram utilizadas as seguintes linguagens e
          ferramentas: HTML, CSS, JavaScript, Local Storage, Ruby on Rails,
          SQLite e figma.<br/><br/>
          <img src="/jokenpo.png" alt="Print da tela inicial do Jokenpo" /><br/><br/>
        </p>

        <p>
          Um outro projeto, feito por conta própria, foi um conversor de moedas.
          Para ele, utilizei: HTML, CSS, JavaScript, React e Bootstrap.<br/><br/>
          <img src="/coinConverter.png" alt="Print da página Coin Converter" /><br/><br/>
        </p>
        <p>
          O último exemplo de projeto que irei compartilhar aqui ainda está em
          construção: o <a href="https://www.comidaprasemana.com" target="_blank">
          Comida pra Semana</a>. 
          A ideia deste site é ser um caderno de receitas virtual e ainda ser
          um auxiliar na organização das refeições da semana, possibilitando
          criar cardápios com as receitas já salvas.<br/><br/>
      
          Esse projeto foi idealizado por mim, mas devido à sua complexidade,
          estou tendo ajuda do meu marido, que é programador, e tem sido uma uma
          forma de colocar em prática os conhecimentos que já tenho e de
          adquirir novos.<br/><br/>
          <img
            src="/comidaPraSemana.png"
            alt="Print da página de receitas do site comidaprasemana.com"
          />
        </p>
      </div>
    </div>
  );
};

export default Projetos;