import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CapturaDados from './CapturaDados.jsx'
import ExibeDados from './ExibeDados.jsx';

function App() {

  return (
    <div className="container mt-2">
      <div className="col-12">
        <h2 className="text-center">Hello, Investimentos</h2>
        <div className="row m-2">
        </div>
        <div className="row m-2">
        </div>
        <div className="row m-2">
        </div>
      </div>

      <CapturaDados />
      <ExibeDados />
    </div>
  )
}

export default App