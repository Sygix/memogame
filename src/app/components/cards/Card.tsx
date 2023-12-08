import { ReactNode } from "react"
import BackImg from '../../../../public/back.png'

const Card = ({ children, flipped }: { children?: ReactNode, flipped: boolean }) => {
  return (
    <div className="bg-blue-400 w-24 flex justify-center items-center aspect-[5/7] rounded-xl">
      <div>
        <span className=" text-5xl">{children}</span>
      </div>
      <div className="rotate-180">
        <span className=" text-5xl"></span>
      </div>
    </div>
  )
}

export default Card;