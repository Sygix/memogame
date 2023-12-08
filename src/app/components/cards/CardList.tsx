import Card from "./Card"
const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];

const CardList = ({data}: {data: string}) => {
  return (
    <div className="grid grid-cols-4 gap-2">
        {board.map((card) => (
            <Card key={card}>{card}</Card>
        ))}
    </div>
  )
}

export default CardList

