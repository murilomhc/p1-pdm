import { useEffect } from "react";

function Historico(props) {

    useEffect(() => {
        console.log(`${props.dadosHistorico.data}\t${props.dadosHistorico.valorFinal}`)
    }, [props.dadosHistorico])

    return (
        <div className="container">
            <div className="row border rounded justify-content-center">
                <div className='row'>
                    <h3 className='fw-bold text-end'>Histórico de simulações</h3>
                    {props.dadosHistorico.length -1}
                </div>
                <table className="table">
                    <thead>
                        <tr className='table-secondary'>
                            <th scope="col" className="text-start">Data</th>
                            <th scope="col" className="text-end">Valor (R$)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.dadosHistorico.map((registro, i) => (
                            <tr key={i}>
                                <td> 
                                    <p className="text-start">{registro.data}</p>
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
