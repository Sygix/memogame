import Board from "../components/Board";

export default async function Page({ params: { moves } }: { params: { moves: string; } }) {
    
    const maxClicks = parseInt(moves);
    
    return (
      <>
        <Board board={["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"]} maxClicks={maxClicks} />
      </>
    );
  }
  