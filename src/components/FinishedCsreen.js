function FinishedCsreen({ points, maxPossiblePoints, highscore, dispatch }) {
  //   const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <span>{points}</span> out of {maxPossiblePoints}
      </p>
      <p className="highscore">( Highscore: {highscore} points) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedCsreen;
