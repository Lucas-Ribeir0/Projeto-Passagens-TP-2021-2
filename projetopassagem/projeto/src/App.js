import './App.css';
import Header from './layout/header';
import Voo from './layout/voos';
import Info from './components/info';


function App() {
  return (
    <div className="App">
      <Header />

      <Voo idVoo="Voo 421"
        color="#DDD"
        bcolor="#555">
      <Info origem="Recife - PE"
              destino="Salvador - BH"/>
      </Voo>
    </div>
  );
}

export default App;
