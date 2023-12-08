'use client';

import { useEffect, useState } from "react";
import CardList from "./cards/CardList";

type GameState = "starting" | "playing" | "won" | "lost";

const Board = ({maxClicks, board}: {maxClicks: number, board: string[]}) => {

    const [boardContent, setBoardContent] = useState<string[]>([]);
    const [seenCards, setSeenCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);
    const [clicksLeft, setClicksLeft] = useState<number>(maxClicks);
    const [gameState, setGameState] = useState<GameState>("starting");

    console.log('boardContent : ', boardContent);
    console.log('matchedCards : ', matchedCards);
    console.log('seenCards : ', seenCards);

    const shuffle = (array: string[]) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const reset = () => {
        setSeenCards([]);
        setMatchedCards([]);
        setClicksLeft(maxClicks);
        setGameState("playing");
    };
    
    const handleCardClick = (cardIndex: number) => {
        if (seenCards.includes(cardIndex) || matchedCards.includes(cardIndex)) return;
        if (seenCards.length === 1) {
            const firstCard = seenCards[0];
            const secondCard = cardIndex;
            if(boardContent[firstCard] === boardContent[secondCard]) {
                setMatchedCards((state) => [...state, firstCard, secondCard]);
            }
            setSeenCards((state) => [...state, cardIndex]);
        } else if(seenCards.length === 2) {
            setSeenCards([cardIndex]);
        } else {
            setSeenCards((state) => [...state, cardIndex]);
        }
        setClicksLeft((state) => state - 1);
    };

    useEffect(() => {
        if (clicksLeft <= 0) setGameState('lost');
    }, [clicksLeft])

    useEffect(() => {
        if (gameState !== 'playing') return;
        if (matchedCards.length === boardContent.length) setGameState("won");
    }, [boardContent.length, gameState, matchedCards.length])

    useEffect(() => {
        if (boardContent.length === 0) {
            setBoardContent(shuffle([...board, ...board]));
            setGameState("playing");
        }
    }, [boardContent.length, board]);

    return (
        <section className="bg-neutral-900 flex-1 min-h-screen w-full flex gap-3 md:gap-6 flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Memory Game</h1>

            {gameState === 'playing' && <>
                <p>Number of clicks left : {clicksLeft}</p>
                <CardList data={boardContent} seenCards={seenCards} matchedCards={matchedCards} handleCardClick={handleCardClick} />
            </>}

            {(gameState === 'won' || gameState === 'lost') && <>
                <h2 className={`text-xl font-bold ${gameState === 'won' ? 'text-green-400' : 'text-red-400'}`}>You {gameState}!</h2>
                <button onClick={() => reset()}>Play again</button>
            </>}

        </section>
    )
};

export default Board;