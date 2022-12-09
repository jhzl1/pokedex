interface Props {
  className?: string
}

export const SearchIcon = ({ className = "w-24 h-24" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} stroke-slate-600`}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="10" cy="10" r="7"></circle>
      <line x1="21" y1="21" x2="15" y2="15"></line>
    </svg>
  )
}
