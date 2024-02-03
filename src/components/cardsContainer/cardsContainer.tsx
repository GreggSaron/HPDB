import React, { useEffect, useState, FC, ChangeEvent } from "react";

import "./cardsContainer.css";

import Pagination from "@mui/material/Pagination";

import CharacterCard from "../cards/characterCard";
import SpellCard from "../cards/spellCard";
import PotionCard from "../cards/potionCard";

import { getCharacters } from "../../utils";

interface WikiProps {
  type: "characters" | "spells" | "potions";
}

const CardsContainer: FC<WikiProps> = ({ type }): JSX.Element => {
  const [data, setData] = useState({ data: null, meta: null });
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    console.log("change number", value);
    setPage(value);
  };

  useEffect(() => {
    getCharacters(page).then((result) => {
      setData(result);
    });
  }, [page]);
  return (
    <>
      <div className="cards-container">
        {type === "characters" ? (
          <>
            {data.data
              ? data.data.map((el) => {
                  return <CharacterCard data={el} />;
                })
              : null}
          </>
        ) : null}
        {type === "spells" ? (
          <React.Fragment>
            <SpellCard />
            <SpellCard />
            <SpellCard />
            <SpellCard />
            <SpellCard />
            <SpellCard />
          </React.Fragment>
        ) : null}
        {type === "potions" ? (
          <React.Fragment>
            <PotionCard />
            <PotionCard />
            <PotionCard />
            <PotionCard />
            <PotionCard />
            <PotionCard />
          </React.Fragment>
        ) : null}
      </div>
      <Pagination
        count={data.meta ? data.meta.pagination.last : 0}
        page={data.meta ? data.meta.pagination.current : 0}
        onChange={handleChange}
        variant="outlined"
        size="large"
      />
    </>
  );
};

export default CardsContainer;
