import React, { useEffect } from "react";
import { useState } from "react";

const OrderBy = ({ sortById, sortByAlpha, sortByLikes }) => {
  const [toggleCardForm, setToggleCardForm] = useState(false);
  const doTheToggle = () => {
    setToggleCardForm(!toggleCardForm);
  };

  return (
    <div>
      <button onClick={doTheToggle}>Sort Cards</button>
      {toggleCardForm && (
        <div>
          <p onClick={sortByAlpha}>Sort Alphabetically</p>
          <p onClick={sortByLikes}>Sort by most liked</p>
          <p onClick={sortById}>Sort by Id</p>
        </div>
      )}
    </div>
  );
};

export default OrderBy;
