function StatusUsuario(props) {
    return (
      <div>
        <p>{props.online ? "Usuário online" : "Usuário offline"}</p>
      </div>
    );
  };
  
  export default StatusUsuario;