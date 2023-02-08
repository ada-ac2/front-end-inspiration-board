import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import axios from "axios";

const CardList = ({ board, cardsData }) => {
  console.log(cardsData);
  return (
    <div>
      {cardsData
        ? cardsData.map((thisCard) => {
            return (
              <Card
                key={thisCard.card_id}
                id={thisCard.card_id}
                message={thisCard.message}
                likes={thisCard.likes_count}
              ></Card>
            );
          })
        : ""}
    </div>
  );
};
export default CardList;
