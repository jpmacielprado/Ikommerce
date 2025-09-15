import { useState } from "react"; 
import type { ChangeEvent, FormEvent, FC } from "react";
import { Link } from "react-router-dom";
import "/src/pages/login.css";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login enviado:", { email, senha });
    // aqui você vai conectar a API
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSenha(e.target.value);

  return (
    <div className="login-container">
      <div className="login-box">
        {/* lado esquerdo */}
        <div className="login-form">
          <h2>
            Acesse sua <span className="highlight">Conta</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu email:"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <input
              type="password"
              placeholder="Digite sua senha:"
              value={senha}
              onChange={handleSenhaChange}
              required
            />

            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>

          <p className="forgot-password">
            Esqueceu sua Senha? <a href="#">Clique aqui.</a>
          </p>

          <div className="divider">
            <span>Continuar com</span>
          </div>

          <div className="social-login">
            <button className="google-btn">🔴 Continuar com Google</button>
            <button className="microsoft-btn">🔴 Continuar com Microsoft</button>
          </div>

          <p className="terms text-sm">
            <a href="#" className="text-orange-500">
              Termos de Uso
            </a>{" "}
            |{" "}
            <a href="#" className="text-orange-500">
              Política de privacidade
            </a>
          </p>
        </div>

        {/* lado direito */}
        <div className="login-banner">
          <div className="banner-content">
            <h2>
            Não Possui <span>Conta?</span>
            </h2>
            <Link to="/cadastro">
              <button className="btn-cadastrar">CADASTRAR-SE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
