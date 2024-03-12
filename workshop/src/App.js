import React from 'react';
import Input from './components/input';
function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
        <div className="bg-red-600 w-5/6">
          <p>
            Receba sua Proof-Of_Attandance NFT
          </p>

          <p className="">
            Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia
          </p>

          <form className="flex flex-col mt-8">
            <Input 
              description="Nome de Usuário"
              label="insira seu nome" />

          </form>
        </div>
    </div>
  );
}

export default App;
