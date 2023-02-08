import Card from "./Card";
import axios from "axios";
import "./cardlist.css";

const CardList = ({ cardsData, setCardsData }) => {
  // here make a method for updating a card usting the put method.
  // you can follow the format I did for delete.
  // instead of filter you are going to want to set new data to
  // cardsData.Map((aCard)=>{return aCard.card_id ==card.card_id? {...card, likes_count: card.likes_count+1}:aCard})
  // set the card data then do your catch error! make sure to pass this along to the card!
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

  const updateLikes = (card, card_id) => {
    const updatedCard = { ...card, likes_count: card.likes_count + 1 };

    axios
      .put(
        `https://back-inspiration-board-magic.herokuapp.com/cards/${card_id}`,
        updatedCard
      )
      .then(() => {
        const updatedCardData = cardsData.map((card) => {
          if (card.card_id === card_id) {
            return updatedCard;
          } else {
            return card;
          }
        });
        setCardsData(updatedCardData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="pinboard">
      {cardsData
        ? cardsData.map((thisCard) => {
            return (
              <Card
                card={thisCard}
                key={thisCard.card_id}
                id={thisCard.card_id}
                message={thisCard.message}
                likes_count={thisCard.likes_count}
                deleteCard={deleteCard}
                updateLikes={updateLikes}
              ></Card>
            );
          })
        : ""}
    </div>
  );
};
export default CardList;
