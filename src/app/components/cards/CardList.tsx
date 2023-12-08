import Card from "./Card";

const CardList = ({ data, matchedCards, seenCards, handleCardClick }: { data: string[]; matchedCards: string[]; seenCards: string[]; handleCardClick: (card: string) => void }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((card, index) => {
        const seen = seenCards.includes(card);
        const matched = matchedCards.includes(card);
        return <Card key={`${card}-${index}`} seen={seen} matched={matched} onClick={() => handleCardClick(card)}>{card}</Card>;
      })}
    </div>
  )
};

export default CardList;

