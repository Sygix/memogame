import Board from "./components/Board";

export default async function Page({
    params: { slug },
  }: {
    params: { slug: string[]; };
  }) {
  
    return (
      <>
        <Board board={["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"]} maxClicks={16*3} />
      </>
    );
  }
  