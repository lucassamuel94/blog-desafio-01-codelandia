import { IconSearch } from "./icons/icon-search"

export const InputSearch = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full bg-dark-20 border-2 border-dark-30 h-[50px] md:h-16 pl-14 md:pl-[72px] rounded-lg focus:ring-2 focus:ring-brand focus:outline-none text-sm md:text-xl"
      />

      <IconSearch className="w-[18px] md:w-8 absolute top-1/2 -translate-y-1/2 left-6" />
    </div>
  )
}