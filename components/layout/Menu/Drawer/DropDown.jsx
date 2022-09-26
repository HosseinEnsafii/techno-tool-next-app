import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const DropDown = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { title, subs, icon } = item;

  // if contains subItems
  if (subs && subs.length > 0) {
    return (
      <li className="w-full cursor-pointer select-none items-center gap-2 rounded-md bg-opacity-50 p-3 dark:text-gray-100 ">
        <div
          onClick={() => setOpen((curState) => !curState)}
          className="flex w-full gap-[0.375rem]"
        >
          <button className="h-7 w-7 text-[1.5rem]">{icon}</button>
          <p>{title}</p>
          <button className="mr-auto   text-gray-600">
            {open ? (
              <BiChevronDown className="h-6 w-6 dark:text-white" />
            ) : (
              <BiChevronUp className="h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>

        {open && (
          <ul className="mt-3 space-y-4 bg-gray-100 py-2 pr-6 dark:bg-gray-800">
            {subs.map((item, i) => (
              <DropDown key={i} item={item} />
            ))}
          </ul>
        )}
      </li>
    );
  } else {
    return <p className="w-full transition-colors duration-75 hover:text-red-400">{title}</p>;
  }
};
export default DropDown;
