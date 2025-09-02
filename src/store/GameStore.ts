import { GameState, Player } from "@/interface/store/GameStoreInterface";
import { create } from "zustand";

export const useGameStore = create<GameState>((set) => ({
  isMuted: false,
  playerOneStep: 0,
  playerTwoStep: 0,
  stepElapsed: 0,
  playerOneCurrentPosition: 0,
  playerTwoCurrentPosition: 0,
  gameBoard: [
    [0, 1, 1, 1, 0, 0], //0 -> 1,2,3
    [1, 0, 0, 0, 1, 1], //1 -> 0,4,5
    [1, 0, 0, 1, 1, 0], //2 -> 0,3,4
    [1, 0, 1, 0, 0, 1], //3 -> 0,2,5
    [0, 1, 1, 0, 0, 0], //4 -> 1,2
    [0, 1, 0, 1, 0, 0], //5 -> 1,3
  ],
  currentPlayer: Player.One,
  isGameOver: false,
  gameWinner: null,
  setIsMuted: (isMuted) => set({ isMuted }),
  setCurrentPlayer: (currentPlayer) => set({ currentPlayer }),
  setPlayerOneStep: (playerOneStep) => set({ playerOneStep }),
  setPlayerTwoStep: (playerTwoStep) => set({ playerTwoStep }),
  setStepElapsed: (stepElapsed) => set({ stepElapsed }),
  setPlayerOneCurrentPosition: (playerOneCurrentPosition) =>
    set({ playerOneCurrentPosition }),
  setPlayerTwoCurrentPosition: (playerTwoCurrentPosition) =>
    set({ playerTwoCurrentPosition }),
  setIsGameOver: (isGameOver) => set({ isGameOver }),
  setGameWinner: (gameWinner) => set({ gameWinner }),
  from: null,
  to: null,
}));
