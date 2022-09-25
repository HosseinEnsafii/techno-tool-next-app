import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const DropDown = ({ item }) => {
  const [open, setOpen] = useState(false);
  const { title, subs, icon } = item;
  if (subs && subs.length > 0) {
    return (
      <li className="w-full cursor-pointer select-none items-center gap-2 rounded-md bg-opacity-50 p-3 ">
        <div
          onClick={() => setOpen((prevState) => !prevState)}
          className="flex w-full gap-[0.375rem]"
        >
          <button className="h-7 w-7 text-[1.5rem]">{icon}</button>
          <p>{title}</p>
          <button className="mr-auto   text-gray-600">
            {open ? <BiChevronDown className="h-6 w-6" /> : <BiChevronUp className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <ul className="mt-1 space-y-4 bg-gray-100 py-2 pr-6">
            {subs.map((item) => (
              <DropDown item={item} />
            ))}
          </ul>
        )}
      </li>
    );
  } else {
    return <p>{title}</p>;
  }
};
export default DropDown;
