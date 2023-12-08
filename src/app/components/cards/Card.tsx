import Image from "next/image";
import { ReactNode } from "react";

const Card = ({ children, seen, matched, onClick }: { children?: ReactNode; seen: boolean; matched: boolean; onClick?: () => void }) => {
  return (
    <button
      className="bg-blue-400 w-24 flex justify-center items-center aspect-[5/7] rounded-xl"
      onClick={onClick}
    >
      {(seen || matched)
        ?
        <div>
        <span className="text-5xl">{children}</span>
        </div>
        : 
        <div className="">
        <Image src={'/back.png'} alt={""} width={48} height={48} />
      </div>
      }
    </button>
  )
}

export default Card;