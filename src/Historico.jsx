import { useEffect } from "react";

function Historico(props) {

    useEffect(() => {
        console.log(`${props.dadosHistorico.data}\t${props.dadosHistorico.valorFinal}`)
    }, [props.dadosHistorico])

    return (
        <div className="container gap-5 mt-2">
            <div className="row align-items-center d-flex flex-row pb-3">
                <label className='fw-bold text-start fs-5 col-6'>Histórico de simulações</label>
                <label className='text-end fs-6 col-6'>{props.dadosHistorico.length} simulações</label>
            </div>

            <div className="row border rounded justify-content-center mt-10">
                <table className="align-items-center table w-100 align-middle mx-auto">
                    <thead>
                        <tr className='table-secondary col-12'>
                            <th scope="col" className="text-start">Data</th>
                            <th scope="col" className="text-end">Valor (R$)</th>
                        </tr>
                    </thead>

                    <tbody className="align-middle">
                        {props.dadosHistorico.filter(registro => Number(registro.valorFinal) != 0).map((registro, i) => (
                            <tr key={i}>
                                <td>
                                    <p className="text-start">{registro.data}</p>
                                </td>
                                <td>
                                    <p className="text-end">{registro.valorFinal}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Historico
