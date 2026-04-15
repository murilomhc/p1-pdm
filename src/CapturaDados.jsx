import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CapturaDados() {
    return (
        <div className="container d-flex flex-column gap-4 text-start justify-content-start">
            <div className="row">
                <h4 className="">Simulador de Investimentos</h4>
                <p className="mt-0.5 mb-0">Descubra quanto seu dinheiro pode render com juros compostos</p>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className="form-label small">Valor Inicial (R$)</label>
                    <input name="valor-inicial" className="form-control" type="text"></input>

                    <label className="form-label mt-2 small">Taxa de Juros (% ao mês)</label>
                    <input name="taxa-de-juros" className="form-control" type="text"></input>
                </div>

                <div className="col-6">
                    <label className="form-label small">Aporte Mensal (R$)</label>
                    <input name="aporte-mensal" className="form-control" type="text"></input>

                    <label className="form-label mt-2 small">Período (meses)</label>
                    <input name="periodo" className="form-control" type="text"></input>
                </div>

            </div>
            <div className="row">
                <div className="col-9">
                    <button className="btn btn-light btn-outline-primary w-100">Calcular</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light btn-outline-secondary fw-semibold w-100">Limpar</button>
                </div>
            </div>
        </div>
    )
}

export default CapturaDados