// Role Randomizer

function RoleRandomizer(props) {
  const players = [
    props.playerOne,
    props.playerTwo,
    props.playerThree,
    props.playerFour,
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const roles = ["Mage 🧙", "Thief 🏹", "Healer ️‍🩹", "Tank 🛡️"];

  let randomizedRoles = shuffle(roles);

  return (
    <div className="roles-container">
      <div className="player-roles">
        {players[0]} will play as the {randomizedRoles[0]}{" "}
      </div>
      <div className="player-roles">
        {players[1]} will play as the {randomizedRoles[1]}
      </div>
      <div className="player-roles">
        {players[2]} will play as the {randomizedRoles[2]}{" "}
      </div>
      <div className="player-roles">
        {players[3]} will play as the {randomizedRoles[3]}{" "}
      </div>
    </div>
  );
}

export { RoleRandomizer };
