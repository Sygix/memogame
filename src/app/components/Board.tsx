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
    const [gameState, setGameState] = useState<GameState>("playing");

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
    
    const handleCardClick = (card: string) => {
        if (matchedCards.includes(card)) return;
        if (seenCards.length === 1) {
            const firstCard = seenCards[0];
            if(firstCard === card) {
                setMatchedCards((state) => [...state, firstCard, card]);
            }
            setSeenCards([]);
        } else if(seenCards.length === 0) {
            setSeenCards([card]);
        }
        setClicksLeft((state) => state - 1);
    };

    useEffect(() => {
        if (clicksLeft <= 0) setGameState('lost');
    }, [clicksLeft])

    useEffect(() => {
        if (matchedCards.length === 16) setGameState("won");
    }, [matchedCards.length])

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