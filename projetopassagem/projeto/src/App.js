import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Voo from './layout/voos';
import Info from './components/info';


function App() {
  return (
    <div className="App">
      <Header />

      <Voo idVoo="Voo 421"
        color="#6FF123"
        bcolor="#000"
        bradius="8px">
      <Info partida="Recife - PE"
              destino="Salvador - BH"
              assentos="34"/>
      </Voo>
      <Voo idVoo="Voo 455"
        color="#CCC"
        bcolor="#000"
        bradius="8px">
      <Info partida="Franca - SP"
              destino="Ribeirão Preto - SP"
              assentos="2"/>
      </Voo>
      <Voo idVoo="Voo 001"
        color="#EE1"
        bcolor="#000"
        bradius="8px">
      <Info partida="Guarulhos - SP"
              destino="Rio de Janeiro - RJ"
              assentos="150"/>
      </Voo>
      <Voo idVoo="Voo 765"
        color="#B22AA2"
        bcolor="#000"
        bradius="8px">
      <Info partida="Ribeirão Preto - SP"
              destino="São Paulo - SP"
              assentos="94"/>
      </Voo>
      <Voo idVoo="Voo 221"
        color="#C9AAEE"
        bcolor="#000"
        bradius="8px">
      <Info partida="São Paulo - SP"
              destino="Dubai - UAE"
              assentos="213"/>
      </Voo>
      <Voo idVoo="Voo 696"
        color="#D2EE99"
        bcolor="#000"
        bradius="8px">
      <Info partida="Brasília - DF"
              destino="Manaus - AM"
              assentos="111"/>
      </Voo>
      <Voo idVoo="Voo 419"
        color="#AA1122"
        bcolor="#000"
        bradius="8px">
      <Info partida="Manaus - AM"
              destino="Porto Alegre - RS"
              assentos="12"/>
      </Voo>
      <Voo idVoo="Voo 4221"
        color="#00CCCC"
        bcolor="#000"
        bradius="8px">
      <Info partida="Florianópolis - SC"
              destino="Ribeirão Preto - SP"
              assentos="290"/>
      </Voo>
      <Voo idVoo="Voo 021"
        color="#CD55AA"
        bcolor="#000"
        bradius="8px">
      <Info partida="Fortaleza - CE"
              destino="São Paulo - SP"
              assentos="55"/>
      </Voo>
      <Voo idVoo="Voo 096"
        color="#555"
        bcolor="#000"
        bradius="8px">
      <Info partida="Franca - SP"
              destino="Ribeirão Preto - SP"
              assentos="5"/>
      </Voo>

      <Footer />
    </div>
  );
}

export default App;
