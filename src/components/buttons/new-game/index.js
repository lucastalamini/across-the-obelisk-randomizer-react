// Form NewGame Button

function NewGameButton() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <button id="btn" type="submit" name="submit" onClick={refreshPage}>
      New Game!
    </button>
  );
}

export { NewGameButton };
