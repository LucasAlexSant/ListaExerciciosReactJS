function NivelUsuario(props){
    return (
        <div>
          <h2>
            {props.nivel === "iniciante" 
              ? "Bem-vindo, iniciante!" 
              : props.nivel === "intermediário" 
              ? "Você está progredindo!" 
              : props.nivel === "avançado" 
              ? "Parabéns, especialista!" 
              : "Nível desconhecido"}
          </h2>
        </div>
      );
    };
    
export default NivelUsuario;