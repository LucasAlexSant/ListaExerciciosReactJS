function VerificaEstudante(props){
    return(
        <div>
            {props.estudante ? <p> é Estudante</p>: <p>Não é estudante</p>}
        </div>
    )
}

export default VerificaEstudante