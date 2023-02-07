import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import Wall from "./components/Wall";

//import axious. Do we ant to do a call hre for all the boards? for a data va

function App() {
  //usestate here to get all data via axios call
  const [allBoardsData, setAllBoardsData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({
    title: "",
    owner: "",
    board_id: null,
  });
  // create new board
  //delete board
  //toggle newboard form
  useEffect(() => {
    axios
      .get("https://back-inspiration-board-magic.herokuapp.com/boards")
      .then((response) => {
        console.log(response.data);
        setAllBoardsData(response.data);
        //setErrorMessage('');
      })
      .catch((error) => {
        console.log(error.response.data.message);
        //setErrorMessage(<section>{error.response.data.message}</section>);
      });
  }, []);

  const selectBoard = (board) => {
    console.log(board);
    setCurrentBoard(board);
    console.log("you clicked me!");
  };

  const boardList = allBoardsData.map((board) => {
    return (
      <li>
        <Board board={board} selectBoard={selectBoard}></Board>
      </li>
    );
  });

  return (
    <main>
      <header>
        <h1>Inspo-Board</h1>
      </header>
      <section>
        <article>
          {currentBoard.board_id ? (
            <Wall currentBoard={currentBoard}></Wall>
          ) : (
            ""
          )}

          <p>Here we can put the Board component need to pass cardlist.</p>
        </article>
        <aside>
          <h3>Select a Board</h3>
          <ul>{boardList}</ul>
          <p>
            newBoard form goes here. need allboards use state, current board use
            state.{" "}
          </p>
          <p>newcard form will need usestate from selected/current board</p>
        </aside>
      </section>
    </main>
  );
}

export default App;
