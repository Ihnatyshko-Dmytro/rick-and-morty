import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { Character } from "./Character";
import { CircleLoader } from 'react-spinners/'
import React from 'react'
import "../../styles.scss";

export const Characters: React.FC<{}> = () => {
  const [characters, setCharacters] = useState<any>(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const { charactersId = 0 } = useParams();
  return (
    <>
      {characters ? (
        <Character
          characters={characters.results}
          charactersId={+charactersId}
        />
      ) : (
        <div className="containerLoader">
          <CircleLoader color={"white"} size={100} />
        </div>
      )}
    </>
  );
};
