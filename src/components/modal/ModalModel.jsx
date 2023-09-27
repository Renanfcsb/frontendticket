import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsListContext } from "../../Providers/TechsContext";
import { ModalModelST } from "./ModalModelST";

export const ModalModel = ({ elem, setmodal }) => {
  const { createTechs, deleteTechs, updateTechs } =
    useContext(TechsListContext);
  if (elem == "newTech") {
    const { register, handleSubmit } = useForm();

    const submit = async (data) => {
      if (await createTechs(data)) {
        setmodal(null);
        window.location.reload();
      }
    };

    return (
      <ModalModelST>
        <div className="modalCard">
          <div className="modalContainer">
            <div className="modalHeader">
              <h2>Cadastrar Tecnologia</h2>
              <button
                onClick={() => {
                  setmodal(null);
                }}
              >
                X
              </button>
            </div>
            <form className="modalContent" onSubmit={handleSubmit(submit)}>
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" {...register("title")} />
              <label htmlFor="status">Selecionar Status</label>
              <select name="" id="" {...register("status")}>
                <option value="">Selecione</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediario</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type="submit">Cadastrar Tecnologia</button>
            </form>
          </div>
        </div>
      </ModalModelST>
    );
  } else if (elem !== null) {
    const { register, handleSubmit } = useForm();
    const attTech = async (data) => {
      console.log(data);
      if (await updateTechs(data)) {
        setmodal(null);
        window.location.reload();
      }
    };
    return (
      <ModalModelST>
        <div className="modalCard">
          <div className="modalContainer">
            <div className="modalHeader">
              <h2>Tecnologia Detalhes</h2>
              <button
                onClick={() => {
                  setmodal(null);
                }}
              >
                X
              </button>
            </div>
            <form className="modalContent" onSubmit={handleSubmit(attTech)}>
              <label htmlFor="name">Nome do projeto</label>
              <input id="name" type="text" />
              <label htmlFor="status">Status</label>
              <select name="" id="" {...register("status")}>
                <option value="">Selecione</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediario</option>
                <option value="Avançado">Avançado</option>
              </select>
              <div className="btContainer">
                <button value={elem} {...register("id")} type="submit">
                  Salvar alterações
                </button>
                <button
                  value={elem}
                  type="button"
                  onClick={async (elem) => {
                    if (await deleteTechs(elem.target.value)) {
                      setmodal(null);
                      window.location.reload();
                    }
                  }}
                  className="btGrey"
                >
                  Excluir
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalModelST>
    );
  }
};
