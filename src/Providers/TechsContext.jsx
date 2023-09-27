import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api/api";
import { UserContext } from "./UserContext";

export const TechsListContext = createContext({});

export const TechsListProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [techs, setTechs] = useState([]);

  const createTechs = async (formData) => {
    try {
      const token = localStorage.getItem("@KENZIETOKEN");
      const resp = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Nova tech criada");
      return true;
    } catch (error) {
      toast(error.message);
      return false;
    }
  };

  const updateTechs = async (formData) => {
    try {
      const token = localStorage.getItem("@KENZIETOKEN");
      const resp = await api.put(`/users/techs/${formData.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Tech Excluida");
      return true;
    } catch (error) {
      toast(error.message);
      return false;
    }
  };

  const deleteTechs = async (id) => {
    console.log(id);
    try {
      const token = localStorage.getItem("@KENZIETOKEN");
      const resp = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Tech Excluida");
      return true;
    } catch (error) {
      toast(error.message);
      return false;
    }
  };

  return (
    <TechsListContext.Provider
      value={{ createTechs, setTechs, deleteTechs, updateTechs }}
    >
      {children}
    </TechsListContext.Provider>
  );
};
