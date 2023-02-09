import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Wall from "./Wall";

describe("Wall component", () => {
  let currentBoard;
  let cardsData;
  let setCardsData;
  let deleteCurrentBoard;
  beforeEach(() => {
    currentBoard = {
      board_id: 1,
      title: "Happy Board",
      owner: "Chug",
    };
    cardsData = [
      { card_id: 1, message: "Everything will be good!" },
      { card_id: 2, message: "What does not kill us, makes us stronger" },
    ];
    setCardsData = jest.fn();
    deleteCurrentBoard = jest.fn();
  });

  it("rendering title, owner and list of cards", () => {
    render(
      <Wall
        currentBoard={currentBoard}
        cardsData={cardsData}
        setCardsData={setCardsData}
        deleteCurrentBoard={deleteCurrentBoard}
      />
    );
    expect(screen.getByText("Happy Board")).toBeInTheDocument();
    expect(screen.getByText("Chug")).toBeInTheDocument();
    expect(screen.getByText("Everything will be good!")).toBeInTheDocument();
    expect(
      screen.getByText("What does not kill us, makes us stronger")
    ).toBeInTheDocument();
  });

  it("delete selected board when the delete button clicked", () => {
    render(
      <Wall
        currentBoard={currentBoard}
        cardsData={cardsData}
        setCardsData={setCardsData}
        deleteCurrentBoard={deleteCurrentBoard}
      />
    );

    const deleteButton = screen.getByTestId("bottombutton");
    fireEvent.click(deleteButton);
    expect(deleteCurrentBoard).toHaveBeenCalledWith(currentBoard);
  });
});
