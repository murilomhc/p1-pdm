import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

function CapturaDados(props) {

    const [valorInicial, setValorInicial] = useState(0);
    const [taxaJuros, setTaxaJuros] = useState(0);
    const [aporteMensal, setAporteMensal] = useState(0);
    const [periodoMeses, setPeriodoMeses] = useState(0);

    const calcular = () => {
        if (Number(valorInicial) == 0) {
            return alert("O valor inicial deve ser maior que zero.");
        }

        let taxa = Number(taxaJuros) / 100
        let inicial = Number(valorInicial)
        let aporte = Number(aporteMensal)
        let meses = Number(periodoMeses)

        let totalInvestido = inicial + (aporte * meses)
        let valorFinal =  (inicial * Math.pow((1 + taxa), meses)) * Math.pow((1 + taxa), meses)
        let qtdAportes = meses
        let jurosAcumulados = valorFinal - totalInvestido 
        let rentabilidade = (jurosAcumulados / totalInvestido) * 100
        
        props.dadosCalculo({
            valorFinal: valorFinal.toFixed(2),
            totalInvestido: totalInvestido,
            qtdAportes: qtdAportes,
            jurosAcumulados: jurosAcumulados.toExponential(2).split('e', 1)[0],
            rentabilidade: rentabilidade.toExponential(2).split('e', 1)[0]
        })
    }

    const limpar = () => {
        setValorInicial(0)
        setTaxaJuros(0)
        setAporteMensal(0)
        setPeriodoMeses(0)
        
        props.dadosCalculo({
            valorFinal: 0,
            totalInvestido: 0,
            qtdAportes: 0,
            jurosAcumulados: 0,
            rentabilidade: 0
        })
    }

    return (
        <div className="container d-flex flex-column gap-4 text-start justify-content-start">
            <div className="row">
                <h4 className="">Simulador de Investimentos</h4>
                <p className="mt-0.5 mb-0">Descubra quanto seu dinheiro pode render com juros compostos</p>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className="form-label small">Valor Inicial (R$)</label>
                    <input name="valor-inicial" className="form-control" type="number" value={valorInicial} onChange={(e) =>
                        setValorInicial(e.target.value)
                    }></input>

                    <label className="form-label mt-2 small">Taxa de Juros (% ao mês)</label>
                    <input name="taxa-de-juros" className="form-control" type="number" value={taxaJuros} onChange={(e) =>
                        setTaxaJuros(e.target.value)
                    }></input>
                </div>

                <div className="col-6">
                    <label className="form-label small">Aporte Mensal (R$)</label>
                    <input name="aporte-mensal" className="form-control" type="number" value={aporteMensal} onChange={(e) =>
                        setAporteMensal(e.target.value)
                    }></input>

                    <label className="form-label mt-2 small">Período (meses)</label>
                    <input name="periodo" className="form-control" type="number" value={periodoMeses} onChange={(e) =>
                        setPeriodoMeses(e.target.value)
                    }></input>
                </div>

            </div>
            <div className="row">
                <div className="col-9">
                    <button className="btn btn-light btn-outline-primary w-100" onClick={() => calcular()}>Calcular</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-light btn-outline-secondary fw-semibold w-100" onClick={() => limpar()}>Limpar</button>
                </div>
            </div>
        </div>
    )
}

export default CapturaDados