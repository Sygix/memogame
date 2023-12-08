'use client';

import { useEffect, useState } from "react";

const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];

type GameState = "playing" | "won" | "lost";

const Board = () => {

    const [boardContent, setBoardContent] = useState<string[]>([]);
    const [seenCards, setSeenCards] = useState<string[]>([]);
    const [macthedCards, setMatchedCards] = useState<string[]>([]);
    const [clicksLeft, setClicksLeft] = useState<number>(16*4);
    const [gameState, setGameState] = useState<GameState>("playing");

    const shuffle = (array: string[]) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const reset = () => {
        setSeenCards([]);
        setMatchedCards([]);
        setClicksLeft(16*4);
    }

    useEffect(() => {
        if (clicksLeft <= 0) setGameState('lost');
    }, [clicksLeft])

    useEffect(() => {
        if (seenCards.length === 16) setGameState("won");
    }, [seenCards.length])

    useEffect(() => {
        if(boardContent.length === 0) {
            setBoardContent(shuffle([...board, ...board]));
        }

        //destroy board
        return () => setBoardContent([]);
    }, [boardContent.length]);

    return (
        <section>
            
        </section>
    )
}

export default Board