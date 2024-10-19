function BotaoLogin(props){

return (
    <div>
      <button>{props.logado ? "Sair" : "Entrar"}</button>
    </div>
  );
};

export default BotaoLogin;