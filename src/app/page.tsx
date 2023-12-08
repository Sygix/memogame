import Board from "./components/Board";

export default async function Page() {
  
    return (
      <>
        <Board board={["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"]} maxClicks={16*3} />
      </>
    );
  }
  