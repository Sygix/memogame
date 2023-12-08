import Card from "./Card";

const CardList = ({ data, matchedCards, seenCards, handleCardClick }: { data: string[]; matchedCards: number[]; seenCards: number[]; handleCardClick: (cardIndex: number) => void }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((card, index) => {
        const seen = seenCards.includes(index);
        const matched = matchedCards.includes(index);
        return <Card key={`${card}-${index}`} seen={seen} matched={matched} onClick={() => handleCardClick(index)}>{card}</Card>;
      })}
    </div>
  )
};

export default CardList;

