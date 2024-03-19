import React from 'react';
import Input from './components/input';
import Button from './components/Button';
import Logo from './assets/logo.svg'


function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
        <div className="bg-black w-1/3">
          <p className="text-white">
            Receba sua Proof-Of-Attandance NFT
          </p>

          <p className="text-white">
            Para receber sua NFT você precisa ter participado do evento e possuir uma carteira na rede Sepolia
          </p>

          <form className="flex flex-col mt-8 justify-center items-center">
            <Input 
              description="Nome de Usuário"
              label="insira seu nome" 
              placeholder="Marcelo"
              type="text"
            />
            <Input 
              description="Email para receber novidades"
              label="Email" 
              placeholder="mareclorrossignolli2005@gmail.com"
              type="email"
            />

            <Button type="submit" name="Gerar NFT" ></Button>
            <Button type="submit" name="Marcelo" ></Button>


          </form>
        </div>
    </div>
  );
}

export default App;
