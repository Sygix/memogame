import { ReactNode } from "react"

const Card = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="bg-blue-400 w-24 flex justify-center items-center aspect-[5/7] rounded-xl">
        <span className=" text-5xl">{children}</span>
    </div>
  )
}

export default Card