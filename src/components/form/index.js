// Import SubmitButton

import { SubmitButton } from "../buttons/submit/index.js";

// Import NewGameButton

import { NewGameButton } from "../buttons/new-game/index.js";

// Import RoleRandomizer

import { RoleRandomizer } from "../randomizer/index.js";

// Form Component

import { useState } from "react";

function Form() {
  const [values, setValues] = useState({
    playerOne: "",
    playerTwo: "",
    playerThree: "",
    playerFour: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlePlayerOneInputChange = (event) => {
    setValues({
      ...values,
      playerOne: event.target.value,
    });
  };

  const handlePlayerTwoInputChange = (event) => {
    setValues({
      ...values,
      playerTwo: event.target.value,
    });
  };

  const handlePlayerThreeInputChange = (event) => {
    setValues({
      ...values,
      playerThree: event.target.value,
    });
  };

  const handlePlayerFourInputChange = (event) => {
    setValues({
      ...values,
      playerFour: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="main-container">
      <form id="form-container" onSubmit={handleSubmit}>
        {submitted ? (
          <RoleRandomizer
            playerOne={values.playerOne}
            playerTwo={values.playerTwo}
            playerThree={values.playerThree}
            playerFour={values.playerFour}
          />
        ) : null}
        {!submitted ? (
          <div className="form-inputs">
            <input
              onChange={handlePlayerOneInputChange}
              value={values.playerOne}
              className="flex-item"
              type="text"
              name="playerOne"
              placeholder="Player One"
              required
            />
            <input
              onChange={handlePlayerTwoInputChange}
              value={values.playerTwo}
              className="flex-item"
              type="text"
              name="playerTwo"
              placeholder="Player Two"
              required
            />
            <input
              onChange={handlePlayerThreeInputChange}
              value={values.playerThree}
              className="flex-item"
              type="text"
              name="playerThree"
              placeholder="Player Three"
              required
            />
            <input
              onChange={handlePlayerFourInputChange}
              value={values.playerFour}
              className="flex-item"
              type="text"
              name="playerFour"
              placeholder="Player Four"
              required
            />
          </div>
        ) : null}
        {!submitted ? <SubmitButton /> : <NewGameButton />}
      </form>
    </div>
  );
}

export { Form };
