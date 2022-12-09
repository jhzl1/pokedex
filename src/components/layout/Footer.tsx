import { GithubIcon } from "assets/icons"

export const Footer = () => {
  return (
    <div className="bg-neutral-900 px-20 py-4 flex justify-center w-full">
      <span className="flex">
        Desinged by
        <a
          href="https://github.com/jhzl1"
          className="font-bold underline underline-offset-2 decoration-blue-700 hover:underline-offset-4 mx-1"
        >
          Jhzl1
        </a>
        <GithubIcon />
      </span>
    </div>
  )
}
