import { InboxIcon } from '@heroicons/react/24/solid';

const Contatos = () => {
  return(
    <section id="contatos" className='mx-20 pt-10'>
      <h1 className='text-5xl font-bold text-center pt-20 pb-10'>Contatos</h1>
      <h2 className='text-4xl text-center pb-10'>Obrigada por acessar a minha página! :D</h2>
      <p className='text-3xl leading-relaxed justify-center pb-10'>
        Deseja entrar em contato comigo para trocar uma ideia ou me contratar?
        Pode mandar uma mensagem através dos seguintes canais:
      </p>
      <ul className='flex flex-col text-2xl leading-loose pb-10'>
        <div className='flex space-x-3'>
          <img src='/email_2099199.png' className='h-10 w-10'/>

          <li className='flex'>
            Email: ceciliamblourenco@gmail.com
          </li>
        </div>
        <div className='flex space-x-3'>
          <img src='/linkedin_3536569.png' className='h-10 w-10'/>
          <li>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/cecilia-lourenco/"
              target="_blank"
              >www.linkedin.com/in/cecilia-lourenco</a
            >
          </li>
        </div>
        <div className='flex space-x-3'>
          <img src='/github_733609.png' className='h-10 w-10'/>
          <li>
            GitHub:
            <a href="https://github.com/cecilialourenco" target="_blank"
              >github.com/cecilialourenco</a
            >
          </li>
        </div>
        <div className='flex space-x-3'>
          <img src='/discord_5968759.png' className='h-10 w-10'/>
          <li>Discord: Cecília Lourenço#7686</li>
        </div>
        <div className='flex space-x-3'>
          <img src='/whatsapp_733641.png' className='h-10 w-10'/>
          <li>WhatsApp:+55 (21) 971-33-5740</li>
        </div>
      </ul>
    </section>
  );
};

export default Contatos;