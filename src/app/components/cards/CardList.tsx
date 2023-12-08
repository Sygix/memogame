import Card from "./Card";

const CardList = ({ data, matchedCards, seenCards }: { data: string[]; matchedCards: string[]; seenCards: string[] }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((card) => {
        const seen = seenCards.includes(card);
        const matched = matchedCards.includes(card);
        return <Card key={card}>{card}</Card>;
      })}
    </div>
  )
};

export default CardList;

