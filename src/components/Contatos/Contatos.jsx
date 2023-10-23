import { InboxIcon } from '@heroicons/react/24/solid';

const Contatos = () => {
  return(
    <section id="contatos" className="bg-cover z-[-10] bg-[url('/design-elegante-de-fundo-abstrato-de-memphis.jpg')] pt-20 flex flex-col items-center">
      <h1 className='text-3xl lg:text-5xl font-bold text-center pt-20 pb-10'>Contatos</h1>
      <div className='max-w-[1600px] mx-20'>
        <h2 className='text-2xl lg:text-4xl text-center pb-10'>Obrigada por acessar a minha página! :D</h2>
        <p className='text-xl lg:text-3xl leading-relaxed justify-center pb-20'>
          Deseja entrar em contato comigo para trocar uma ideia ou me contratar?
          Pode mandar uma mensagem através dos seguintes canais:
        </p>
        <ul className='lg:flex flex-row justify-between lg:text-xl leading-loose pb-20'>  
          <a 
            className='grid justify-items-center'
            href="mailto:ceciliamblourenco@gmail.com">
            <img src='/email_2099199.png' className='h-10 w-10'/>
            <p>ceciliamblourenco@gmail.com</p>
          </a>
        
          <a
            className='grid justify-items-center'
            href="https://www.linkedin.com/in/cecilia-lourenco/" target="_blank">
            <img src='/linkedin_3536569.png' className='h-10 w-10'/>
            <p>www.linkedin.com/in/cecilia-lourenco</p>
          </a>
        
          <a 
            className='grid justify-items-center'
            href="https://github.com/cecilialourenco" target="_blank">
            <img src='/github_733609.png' className='h-10 w-10'/>
            <p>github.com/cecilialourenco</p>
          </a>
        
          <a 
            className='grid justify-items-center'
            href="https://discord.com/channels/@cecilialourenco">
            <img src='/discord_5968759.png' className='h-10 w-10'/>
            <p>cecilialourenco</p>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Contatos;