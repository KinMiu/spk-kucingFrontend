import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const itemTips = [
    {
      name: "Grouming",
      path: "/tips/grouming"
    },
    {
      name: "Makanan",
      path: "/tips/makanan"
    },
    {
      name: "memandikan",
      path: "/tips/memandikan"
    },
    {
      name: "Kandang",
      path: "/tips/kandang"
    },
    {
      name: "Vaksin",
      path: "/tips/vaksin"
    },
  ]

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block flex items-center text-white">
          <span className="block text-xs font-bold  dark:text-white">
            TIPS & TRIK
          </span>
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute left-0 mt-4 flex w-40 flex-col shadow-default  ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col px-1 py-1 bg-orange-400 rounded-md">
          {
            itemTips.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex px-3 py-3 text-sm font-medium rounded-md duration-300 ease-in-out hover:bg-orange-500 lg:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownNavbar;
