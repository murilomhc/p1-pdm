import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

function ExibeDados() {
    const [valorFinal, setValorFinal] = useState(0);
    const [totalInvestido, setTotalInvestido] = useState(0);
    const [numAportes, setNumAportes] = useState(0);
    const [jurosAcumulados, setJurosAcumulados] = useState(0);
    const [percentualRentabilidade, setPercentualRentabilidade] = useState(0);

    return (
        <div className="container d-flex flex-column bg-light mt-4 p-4 pb-2">
            <div className="row">
                <p className='mb-0'>Valor final acumulado</p>
                <h4 className="text-success pb-3 fs-2">R${valorFinal}</h4>
                <hr></hr>
            </div>
            <div className="row pt-2">
                <div className="col-6">
                    <p className='mb-0 small'>Total Investido</p>
                    <p className='fw-bold fs-5'>R${totalInvestido}</p>

                    <p className='mb-0 small'>N° de Aportes</p>
                    <p className='fw-bold fs-5'>{numAportes}</p>
                </div>
                <div className="col-6">
                    <p className='mb-0 small'>Juros Acumulados</p>
                    <p className='fw-bold fs-5'>R${jurosAcumulados}</p>

                    <p className='mb-0 small'>Rentabilidade</p>
                    <p className='fw-bold text-success fs-5'>{percentualRentabilidade}%</p>
                </div>
            </div>
        </div>
    )
}

export default ExibeDados