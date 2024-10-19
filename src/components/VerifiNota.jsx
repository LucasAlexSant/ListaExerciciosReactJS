function VerificaNota(props) {
    const nota = props.nota;
    let mensagem;
  
    if (nota >= 90) {
      mensagem = "Excelente";    

    } else if (nota >= 70) {
      mensagem = "Bom";

    } else{
        mensagem = "Precisa Melhorar";
      }
  
    return (
      <div>
        <h2>Nota: {nota}</h2>
        <p>{mensagem}</p>
      </div>
    );
  }
  
export default  VerificaNota;
