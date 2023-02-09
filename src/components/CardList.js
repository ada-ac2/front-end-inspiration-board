import Card from "./Card";
import axios from "axios";
import "./cardlist.css";

const CardList = ({ cardsData, setCardsData }) => {
  // here make a method for updating a card usting the put method.
  // you can follow the format I did for delete.
  // instead of filter you are going to want to set new data to
  // cardsData.Map((aCard)=>{return aCard.card_id ==card.card_id? {...card, likes_count: card.likes_count+1}:aCard})
  // set the card data then do your catch error! make sure to pass this along to the card!

  const setClass = (card_id) => {
    if (card_id % 4 === 0) {
      return "cardOne";
    } else if (card_id % 3 === 0) {
      return "cardTwo";
    } else if (card_id % 2 === 0) {
      return "cardThree";
    }
    return "cardFour";
  };
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
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card_id}`, updatedCard)
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
                setClass={setClass}
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
