import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CapturaDados from './CapturaDados.jsx'

function App() {

  return (
    <div className="container mt-2">
      <div className="col-12">
        <h1>Hello, Investimentos</h1>
        <div className="row m-2">
        </div>
        <div className="row m-2">
        </div>
        <div className="row m-2">
        </div>
      </div>

      <CapturaDados />
    </div>
  )
}

export default App