import { Link } from "react-router-dom";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";
import { Schema } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import imagem from "../../assets/Logo.svg";
import { LoginFormStyled, LoginStyled } from "./loginST";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

const schema = yup
  .object({
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendLogin = (data) => {
    userLogin(data);
  };

  return (
    <LoginStyled>
      <div className="LoginContainer">
        <h2>Login</h2>

        <LoginFormStyled onSubmit={handleSubmit(sendLogin)}>
          <Input
            id="name"
            label="Nome"
            placeholder="Digite seu nome de usuario"
            {...register("username")}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <button type="submit">Entrar</button>
        </LoginFormStyled>

        <span>Ainda não possui uma conta ? </span>
        <Link to="/register">
          <button>Cadastrar-se</button>
        </Link>
      </div>
    </LoginStyled>
  );
};

export default Login;
