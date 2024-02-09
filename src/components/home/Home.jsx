import React, { useState } from "react";
import "./home.css";
import Form from "../form/Form";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import { deleteTache, getTache } from "../../actions/tache.action";
function Home() {
  const [visible, setVisible] = useState(false);
  const [edition, setEdition] = useState(false);
  const handleEdition = (e) => {
    e.preventDefault();
    setEdition(true);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  const tache = useSelector((state) => state.tacheReducer);
  const dispatch = useDispatch();
  return (
    <div className="home_container">
      <div className="title">
        <h1> liste des taches</h1>
        <button onClick={handleClick}> ajouter une tache</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>nom</th>
            <th>description</th>
            <th>date debut</th>
            <th>date fin</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(tache) &&
            tache.map((tache, index) => {
              return (
                <tr key={index}>
                  <td>{tache.titre}</td>
                  <td>{tache.description}</td>
                  <td>{tache.datedebut}</td>
                  <td>{tache.datefin}</td>
                  <td className="action">
                    <button className="editer" onClick={handleEdition}>
                      editer
                    </button>
                    <button
                      className="supprimer"
                      onClick={(e) => {
                        dispatch(deleteTache(tache.id));
                        dispatch(getTache());
                      }}
                    >
                      supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {visible && (
        <Form
          visible={visible}
          handleClick={() => handleClick(setVisible(false))}
          edition={edition}
          handleEdition={() => handleEdition(setEdition(false))}
        />
      )}
    </div>
  );
}

export default Home;
