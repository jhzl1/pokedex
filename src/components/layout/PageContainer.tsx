import { BackIcon } from "assets/icons"
import { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"

export const PageContainer = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()

  return (
    <div className="py-4 relative">
      <button
        className="bg-neutral-700 rounded-full h-8 w-8 flex justify-center items-center absolute left-0"
        onClick={() => navigate(-1)}
      >
        <BackIcon />
      </button>

      <div className="mt-10">{children}</div>
    </div>
  )
}
