import { Link } from "react-router-dom"
import React from 'react'

interface Props {
  characters: any;
  charactersId: number;
}

export const Character: React.FC<Props> = ({characters, charactersId}) => {
  console.log(characters);
  
  return (
    <div className="containerApis">
      <ul>
        {characters.map((character: { id: any; image: string, name: string }) => (
          <li key={character.id} className="itemCharecter">
            <Link to={`/characters/${character.id}`}>
              <img src={`${character.image}`} alt="" />
              <h1>Name: {character.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
