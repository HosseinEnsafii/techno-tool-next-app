import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <form className="col-span-5 max-w-[35rem] md:col-span-3 md:col-start-2 md:row-start-1">
      <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Search Product
      </label>
      <div className="dark:focus-within:rind-gray-400 relative flex w-full items-center gap-2 rounded-lg bg-gray-50 p-3 focus-within:ring-2 focus-within:ring-gray-600 dark:bg-gray-700">
        <div className=" flex items-center  text-[22px] text-gray-400 dark:text-gray-300">
          <BiSearch />
        </div>
        <input
          placeholder="جستجو"
          className="w-full  bg-transparent text-sm text-gray-900 outline-none dark:placeholder:text-gray-300"
        />
      </div>
    </form>
  );
};
export default Search;
