import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardList = ({ cardsData, setCardsData }) => {
  const deleteCard = (card, card_id) => {
    axios
      .delete(
        `https://back-inspiration-board-magic.herokuapp.com/cards/${card_id}`
      )
      .then((response) => {
        const newCardData = cardsData.filter((aCard) => {
          return aCard.card_id !== card_id;
        });
        setCardsData(newCardData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {cardsData
        ? cardsData.map((thisCard) => {
            return (
              <Card
                card={thisCard}
                key={thisCard.card_id}
                id={thisCard.card_id}
                message={thisCard.message}
                likes={thisCard.likes_count}
                deleteCard={deleteCard}
              ></Card>
            );
          })
        : ""}
    </div>
  );
};
export default CardList;
