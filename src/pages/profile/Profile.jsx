import React, { useContext, useState } from "react";
import imagem from "../../assets/Logo.svg";
import { ModalModel } from "../../components/modal/ModalModel";
import { TechsCards } from "../../components/techs/TechsCard";
import { UserContext } from "../../Providers/UserContext";
import { ProfileStyled } from "./ProfileST";

export const Profile = () => {
  const { userLogout, user } = useContext(UserContext);
  const [modal, setmodal] = useState(null);

  console.log("profile");

  return (
    <ProfileStyled>
      <div className="container">
        <header className="header">
          <img src={imagem} alt="Logo kenzie" />
          <button onClick={() => userLogout()}>Sair</button>
        </header>
        <div className="line"></div>
        <section>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </section>
        <div className="line"></div>
        <main>
          <div className="containerCardHeader">
            <h3>Tecnologias</h3>
            <button onClick={() => setmodal("newTech")}>+</button>
          </div>
          <div className="containerCard">
            <TechsCards setmodal={setmodal} />
          </div>
        </main>
      </div>
      <ModalModel elem={modal} setmodal={setmodal} />
    </ProfileStyled>
  );
};
