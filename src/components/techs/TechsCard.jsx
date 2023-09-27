import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { TechsCArdSt } from "./TechsCardST";

export const TechsCards = ({ setmodal }) => {
  const { user } = useContext(UserContext);

  return (
    <TechsCArdSt>
      {user.techs.map((elem) => {
        return (
          <div
            onClick={() => {
              setmodal(elem.id);
            }}
            key={elem.id}
          >
            <h2>{elem.title}</h2>
            <p>{elem.status}</p>
          </div>
        );
      })}
    </TechsCArdSt>
  );
};
