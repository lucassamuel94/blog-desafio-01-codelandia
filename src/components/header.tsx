import { InputSearch } from "./input-search"

export const Header = () => {
  return (
    <header className="bg-dark-20">
      <div className="container flex flex-col items-center gap-8 md:gap-12 py-12 md:py-16">
        <h1 className="text-2xl md:text-[40px]"><span className="text-brand">Code</span>lândia</h1>

        <InputSearch />
      </div>
    </header>
  )
}