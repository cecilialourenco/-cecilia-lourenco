const Experiencia = () => {
  return(
    <section id="experiencia" className='bg-[#faddcf]/30 py-20 flex flex-col items-center'>
      <h1 className='text-3xl lg:text-5xl text-center font-bold pt-20 pb-10'>Experiência</h1>
      <div className='max-w-[1600px] flex flex-col gap-4 lg:leading-relaxed text-justify mx-20 text-xl lg:text-3xl text-slate-950'>
        <p>
          Sou formada em Psicologia e atuei como psicóloga por quase 10 anos. No  
          meu processo de transição de carreira para a área de TI, iniciei os meus 
          estudos a partir da área de Dados. Fiz um bootcamp em Análise de Dados, 
          pela Ironhack, e me formei em Banco de Dados, pela Universidade Estácio de Sá, 
          enquanto fazia diversos cursos avulsos relacionados a essa área.
        </p>
        <p>
          Tive uma breve passagem por um estágio em Análise de Dados, mas logo migrei 
          para Desenvolvimento Web, com foco em backend, em uma empresa do ramo de Fintech. 
          Nesse estágio tive o meu primeiro contato com 
          MongoDB, JavaScript, TypeScript, Node, NextJS e ApiRest.
        </p>
        <p>
          Atualmente, sou estagiária em uma empresa do ramo portuário, 
          onde desempenho as seguintes funções:
        </p>
        <ul style={{listStyleType: "square", paddingLeft: "1em"}}>
          <li>Contribuição para a otimização de processos e melhorias no uso do sistema,
              garantindo maior eficiência e usabilidade para os usuários;</li>
          <li>Facilitação da comunicação entre a equipe internacional (sede em Manila),
              fornecedores e colaboradores locais, alinhando expectativas e prazos;</li>
          <li>Gerenciamento de demandas do SAP, organizando e direcionando as
              demandas para as equipes responsáveis;</li>
          <li>Documentação de funcionalidades e bugs em sistemas web, criando manuais
              para facilitar a manutenção futura.</li>
        </ul>

      </div>
    </section>
  );
};

export default Experiencia;