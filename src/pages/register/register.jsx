import { useForm } from "react-hook-form";
import { Schema } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import Input from "../../components/input/Input";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";
import imagem from "../../assets/Logo.svg";
import { RegisterFormStyled } from "./registerST";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    username: yup.string().required("O nick name é obrigatório"),
    email: yup.string().email().required("Email é obrigatótio"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiuscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no minimo 8 caraccteres")
      .required("Senha Obrigatória"),
    confPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas devem ser iguais")
      .required("Campo Obrigatório"),
    birth_date: yup.date().required("A data de nascimento é obrigatória"),
    contact: yup
      .string()
      .typeError("Deve ser um numero")
      .required("Digite seu contato"),
    course_module: yup.string().required(),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendRegister = async (data) => {
    delete data.confPassword;

    try {
      const response = await api.post("/users", data);
      navigate("/");
      toast.success("Cadastro realizado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const navigate = useNavigate();
  return (
    <RegisterFormStyled>
      <div className="container-header">
        <img src={imagem} alt="" />
        <button
          onClick={() => {
            navigate("/");
          }}
          className="button-back"
        >
          Voltar
        </button>
      </div>
      <form onSubmit={handleSubmit(sendRegister)}>
        <h2>Crie sua Conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <Input
          id="username"
          label="Nome de usuário"
          type="text"
          error={errors.username?.message}
          placeholder="Digite seu nome de usuario aqui"
          {...register("username")}
        />
        <Input
          id="first_name"
          label="Nome"
          type="text"
          error={errors.name?.message}
          placeholder="Digite seu nome"
          {...register("first_name")}
        />
        <Input
          id="last_name"
          label="Sobrenome"
          type="text"
          error={errors.name?.message}
          placeholder="Digite seu sobrenome"
          {...register("last_name")}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          error={errors.email?.message}
          placeholder="Digite seu email aqui"
          {...register("email")}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          error={errors.password?.message}
          placeholder="Digite a senha aqui"
          {...register("password")}
        />
        <Input
          id="confPassword"
          label="Confirmar Senha"
          type="password"
          error={errors.confPassword?.message}
          placeholder="Digite a senha aqui"
          {...register("confPassword")}
        />
        <Input
          id="birth_date"
          label="Data de nascimento"
          type="text"
          error={errors.bio?.message}
          placeholder="aaaa-mm-dd"
          {...register("birthdate")}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </RegisterFormStyled>
  );
};

export default Register;
