import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import Wall from "./components/Wall";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";
import WebFont from "webfontloader";
import OrderBy from "./components/OrderBy";

function App() {
  const [allBoardsData, setAllBoardsData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({
    title: "",
    owner: "",
    board_id: null,
  });
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Sacramento", "Epilogue", "Cutive"],
      },
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://back-inspiration-board-magic.herokuapp.com/boards")
      .then((response) => {
        setAllBoardsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  //api call for getting cards.
  const getBoardCards = (board) => {
    axios
      .get(
        `https://back-inspiration-board-magic.herokuapp.com/boards/${board.board_id}/cards`
      )
      .then((response) => {
        setCardsData(response.data);
        console.log(cardsData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // api call to post a new card
  const postNewCard = (board_id, new_card) => {
    axios
      .post(
        `https://back-inspiration-board-magic.herokuapp.com/boards/${board_id}/cards`,
        new_card
      )
      .then((response) => {
        const cards = [...cardsData];
        cards.push(response.data);
        setCardsData(cards);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const createNewBoard = (new_board) => {
    axios
      .post(
        `https://back-inspiration-board-magic.herokuapp.com/boards`,
        new_board
      )
      .then((response) => {
        const boards = [...allBoardsData];
        boards.push(response.data);
        setAllBoardsData(boards);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const selectBoard = (board) => {
    setCurrentBoard(board);
    getBoardCards(board);
  };

  const boardList = allBoardsData.map((board) => {
    return (
      <li>
        <Board board={board} selectBoard={selectBoard}></Board>
      </li>
    );
  });

  const deleteCurrentBoard = (board) => {
    console.log(board.board_id);
    axios
      .delete(
        `https://back-inspiration-board-magic.herokuapp.com/boards/${board.board_id}`
      )
      .then((response) => {
        console.log(response.status);
        console.log(response.data.message);
        setCurrentBoard({
          title: "",
          owner: "",
          board_id: null,
        });
      })
      .catch((error) => {
        console.log(error);
        setCurrentBoard(board);
      });
  };

  const sortByLikes = () => {
    const cards = [...cardsData];
    cards.sort((a, b) => b.likes_count - a.likes_count);
    setCardsData(cards);
    console.log(cards);
  };

  const sortByAlpha = () => {
    const cards = [...cardsData];
    cards.sort((a, b) => a.message.localeCompare(b.message));
    setCardsData(cards);
    console.log(cards);
  };

  const sortById = () => {
    const cards = [...cardsData];
    cards.sort((a, b) => a.card_id - b.card_id);
    setCardsData(cards);
    console.log(cards);
  };

  return (
    <div class="coveroverlay">
      <main>
        <header>
          <h1>Inspo-Board</h1>
        </header>
        <section>
          <article>
            {currentBoard.board_id ? (
              <Wall
                currentBoard={currentBoard}
                cardsData={cardsData}
                setCardsData={setCardsData}
                deleteCurrentBoard={deleteCurrentBoard}
              ></Wall>
            ) : (
              ""
            )}
          </article>
          <aside>
            <div class="boardselect">
              <h3>Select a Board</h3>
              <ul>{boardList}</ul>
            </div>

            {<NewBoardForm addBoardCallback={createNewBoard}></NewBoardForm>}

            {currentBoard.board_id ? (
              <NewCardForm
                board_id={currentBoard.board_id}
                postNewCard={postNewCard}
              ></NewCardForm>
            ) : (
              ""
            )}

            {cardsData.length > 0 ? (
              <OrderBy
                sortByLikes={sortByLikes}
                sortByAlpha={sortByAlpha}
                sortById={sortById}
              ></OrderBy>
            ) : (
              ""
            )}
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
