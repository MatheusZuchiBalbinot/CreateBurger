
function Login() {
    return (
        <div className="register_div">
            <form className="login_form">
                <h3>Formulário de Login</h3>
                <div className="user_div">
                    <input type="text" className="user_input" placeholder="Digite o seu usuário: "></input>
                </div>
                <div className="password_div">
                    <input type="password" className="user_input" placeholder="Digite a sua senha: "></input>
                </div>
                <button type="button" onClick={console.log('enviou')}> Enviar </button>
                <button type="button" onClick={console.log('enviou')}> Não possui uma conta? </button>
            </form>
        </div>
    )
}

export default Login;