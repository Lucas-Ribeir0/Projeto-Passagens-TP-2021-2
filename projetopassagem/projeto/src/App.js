import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Voo from './layout/voos';
// import i from './components/info';
// import Botao from './components/button';
import React from 'react';


function App() {
  return (
        <div className="App">
          <Header />

          <Voo idVoo="Voo 421"
            color="#499CBF"
            bradius="8px"
            horario="15:40"
            partida="Recife - PE"
            destino="Salvador - BH"
            assentos="34">
          </Voo>
          <Voo idVoo="Voo 455"
            color="#499CBF"
            bradius="8px"
            horario="21:00"
            partida="Franca - SP"
            destino="Ribeirão Preto - SP"
            assentos="2">
          </Voo>
          <Voo idVoo="Voo 001"
            color="#346980"
            bradius="8px"
            horario="12:00"
            partida="Guarulhos - SP"
            destino="Rio de Janeiro - RJ"
            assentos="150">
          </Voo>
          <Voo idVoo="Voo 765"
            color="#346980"
            bradius="8px"
            horario="09:00"
            partida="Ribeirão Preto - SP"
            destino="São Paulo - SP"
            assentos="94">
          </Voo>
          <Voo idVoo="Voo 221"
            color="#499CBF"
            bradius="8px"
            horario="04:00"
            partida="São Paulo - SP"
            destino="Dubai - UAE"
            assentos="213">
          </Voo>
          <Voo idVoo="Voo 696"
            color="#499CBF"
            bcolor="#000"
            bradius="8px"
            horario="10:00"
            partida="Brasília - DF"
            destino="Manaus - AM"
            assentos="111">
          </Voo>
          <Voo idVoo="Voo 419"
            color="#346980"
            bcolor="#000"
            bradius="8px"
            horario="22:00"
            partida="Manaus - AM"
            destino="Porto Alegre - RS"
            assentos="12">
          </Voo>
          <Voo idVoo="Voo 4221"
            color="#346980"
            bcolor="#000"
            bradius="8px"
            horario="16:30"
            partida="Florianópolis - SC"
            destino="Ribeirão Preto - SP"
            assentos="0">
          </Voo>
          <Voo idVoo="Voo 021"
            color="#499CBF"
            bcolor="#000"
            bradius="8px"
            horario="10:00"
            partida="Fortaleza - CE"
            destino="São Paulo - SP"
            assentos="55">
          </Voo>
          <Voo idVoo="Voo 096"
            color="#499CBF"
            bcolor="#000"
            bradius="8px"
            horario="17:10"
            partida="Franca - SP"
            destino="Ribeirão Preto - SP"
            assentos="5">
          </Voo>

          <Footer />
        </div>
  );
};


export default App;
