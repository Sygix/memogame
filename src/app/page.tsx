import Board from "./components/Board";
import Card from "./components/cards/Card";

export default async function Page({
    params: { slug },
  }: {
    params: { slug: string[]; };
  }) {
  
    return (
      <>
        <Card>💩</Card>
      </>
    );
  }
  