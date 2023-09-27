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
    bio: yup.string().required("A bio é obrigatória"),
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
          id="name"
          label="Nome"
          type="text"
          error={errors.name?.message}
          placeholder="Digite seu nome aqui"
          {...register("name")}
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
          id="bio"
          label="Bio"
          type="text"
          error={errors.bio?.message}
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <Input
          id="contact"
          label="Contato"
          type="text"
          error={errors.contact?.message}
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <label htmlFor="course_module">Selecionar módulo</label>
        <select {...register("course_module")} id="course_module">
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </RegisterFormStyled>
  );
};

export default Register;
