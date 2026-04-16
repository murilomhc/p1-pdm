import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CapturaDados from './CapturaDados.jsx'
import ExibeDados from './ExibeDados.jsx';
import { useEffect, useState } from 'react';

function App() {
    const [valorInicial, setValorInicial] = useState(0);
    const [taxaJuros, setTaxaJuros] = useState(0);
    const [aporteMensal, setAporteMensal] = useState(0);
    const [periodoMeses, setPeriodoMeses] = useState(0);
    const [dadosCalculo, setDadosCalculo] = useState({});

  return (
    <div className="container mt-2">
      <div className="col-12">
        <h2 className="text-center">Hello, Investimentos</h2>
        <CapturaDados
          dadosCalculo = {setDadosCalculo}
        />
        <ExibeDados
          dadosCalculo = {dadosCalculo}
        />
      </div>
    </div>
  )
}

export default App