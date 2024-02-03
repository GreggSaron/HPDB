import React, { useState, FC } from "react";

import MissingCharacterIcon from "../../../assets/MissingCharacter.svg";

import "../cards.css";
import "./characterCard.css";

export type CharacterCardProps = {
  data: {
    id: string;
    type: string;
    attributes: {
      slug: string;
      alias_names: [] | string[];
      animagus: null | boolean;
      blood_status: null | boolean;
      boggart: null | boolean;
      born: null | boolean;
      died: null | boolean;
      eye_color: null | boolean;
      family_members: [] | string[];
      gender: null | boolean;
      hair_color: null | boolean;
      height: null | boolean;
      house: null | boolean;
      image: null | boolean;
      jobs: [] | string[];
      marital_status: null | boolean;
      name: string;
      nationality: null | boolean;
      patronus: null | boolean;
      romances: [] | string[];
      skin_color: null | boolean;
      species: null | boolean;
      titles: [] | string[];
      wands: [] | string[];
      weight: null;
      wiki: string; //ссылка на википедию
    };
    links: {
      self: string; //часть для запроса на этот персонаж
    };
  };
};

export const CharacterCard: FC<CharacterCardProps> = ({
  data,
}): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div key={data.id}>
      <div className="card" onClick={openModal}>
        <img
          className="card-image"
          src={
            data.attributes.image ? data.attributes.image : MissingCharacterIcon
          }
        />
        <p>{data.attributes.name}</p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            test
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            test 2
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
