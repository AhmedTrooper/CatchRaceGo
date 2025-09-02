export interface GameState {
  isMuted: boolean;
  playerOneStep: number;
  playerTwoStep: number;
  stepElapsed: number;
  playerOneCurrentPosition: number;
  playerTwoCurrentPosition: number;
  gameBoard: Array<Array<number>>;
  currentPlayer: Player;
  isGameOver: boolean;
  gameWinner: Player | null;
  setIsMuted: (isMuted: boolean) => void;
  setCurrentPlayer: (player: Player) => void;
  setPlayerOneStep: (step: number) => void;
  setPlayerTwoStep: (step: number) => void;
  setStepElapsed: (elapsed: number) => void;
  setPlayerOneCurrentPosition: (position: number) => void;
  setPlayerTwoCurrentPosition: (position: number) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  setGameWinner: (gameWinner: Player | null) => void;
  from: number | null;
  to: number | null;
}

export enum Player {
  One = "playerOne",
  Two = "playerTwo",
}
