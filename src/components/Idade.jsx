function Idade(props) {
    return (
        <div>
            <h2>Idade: {props.idade}</h2>
            {props.idade >= 18 ? <p>Você é adulto</p> : <p>Você é menor de idade</p>}
        </div>
    )
}

export default Idade;