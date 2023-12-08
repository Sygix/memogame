'use client';

import { useEffect, useState } from "react";
import CardList from "./cards/CardList";

const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];
const maxClicks = 16*3;

type GameState = "playing" | "won" | "lost";

const Board = () => {

    const [boardContent, setBoardContent] = useState<string[]>([]);
    const [seenCards, setSeenCards] = useState<string[]>([]);
    const [matchedCards, setMatchedCards] = useState<string[]>([]);
    const [clicksLeft, setClicksLeft] = useState<number>(maxClicks);
    const [gameState, setGameState] = useState<GameState>("won");

    const shuffle = (array: string[]) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const reset = () => {
        setSeenCards([]);
        setMatchedCards([]);
        setClicksLeft(maxClicks);
        setGameState("playing");
    }

    useEffect(() => {
        if (clicksLeft <= 0) setGameState('lost');
    }, [clicksLeft])

    useEffect(() => {
        if (seenCards.length === 16) setGameState("won");
    }, [seenCards.length])

    useEffect(() => {
        if (boardContent.length === 0) {
            setBoardContent(shuffle([...board, ...board]));
        }
    }, [boardContent.length]);

    return (
        <section className="w-full flex gap-3 md:gap-6 flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Memory Game</h1>

            {gameState === 'playing' && <>
                <p>Number of clicks left : {clicksLeft}</p>
                <CardList data={boardContent} seenCards={seenCards} matchedCards={matchedCards} />
            </>}

            {(gameState === 'won' || gameState === 'lost') && <>
                <h2 className={`text-xl font-bold ${gameState === 'won' ? 'text-green-400' : 'text-red-400'}`}>You {gameState}!</h2>
                <button onClick={() => reset()}>Play again</button>
            </>}

        </section>
    )
};

export default Board;