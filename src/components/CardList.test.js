import React from "react";
import axios from "axios";
import { render, fireEvent, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList component", () => {
  let cardsData;
  let setCardsData;
  beforeEach(() => {
    cardsData = [
      { card_id: 1, message: "Everything will be good!" },
      { card_id: 2, message: "What does not kill us, makes us stronger" },
    ];
    setCardsData = jest.fn();
  });

  it("renders correctly when passed the cardsData props", () => {
    render(<CardList cardsData={cardsData} setCardsData={setCardsData} />);

    expect(screen.getAllByTestId("card").length).toBe(cardsData.length);
  });

  it("renders an empty list of cards without crashing", () => {
    const cardsList = render(<CardList cardsData={[]} />);
    expect(cardsList).not.toBeNull();
  });
});
