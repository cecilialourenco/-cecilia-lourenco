import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
		<div className="flex items-center space-between p-5 fixed z-10 h-[100px] w-full bg-white">
      <img 
        src="/fotoAtual.jpg"
				alt="logo"
        className='h-[60px] w-[60px] rounded-full border-solid border-2 border-lime-600'
      />
      <h1 className='p-3 text-2xl'>CECÍLIA LOURENÇO</h1>
      
      <nav>
        <section className="MOBILE-MENU lg:hidden flex">
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
						<svg className="w-5 h-5 animate-pulse absolute end-5 top-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
						</svg>
          </button>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]" onClick={() => setIsNavOpen(false)}>
              <li className="border-b border-lime-600 my-8 uppercase">
                <a href="#home">Home</a>
              </li>
              <li className="border-b border-lime-600 my-8 uppercase">
                <a href="#sobreMim">Sobre Mim</a>
              </li>
              <li className="border-b border-lime-600 my-8 uppercase">
                <a href="#experiencia">Experiência</a>
              </li>
							<li className="border-b border-lime-600 my-8 uppercase">
                <a href="#projetos">Projetos</a>
              </li>
              <li className="border-b border-lime-600 my-8 uppercase">
                <a href="#contatos">Contatos</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden uppercase space-x-8 top-10 absolute end-5 lg:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobreMim">Sobre Mim</a>
          </li>
          <li>
            <a href="#experiencia">Experiência</a>
          </li>
					<li>
            <a href="#projetos">Projetos</a>
          </li>
					<li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
