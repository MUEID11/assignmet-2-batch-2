import { useState } from "react";

const Sorting = ({ setFormData, formData, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleSorting(order) {

    const sortedData = [...formData].sort((a, b) => 
    {
      if(a.type === type){
       return order === "asc" ? a.amount - b.amount : b.amount - a.amount
      }
    }
    );
    setFormData(sortedData);
    setIsOpen(false); 
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l9 0" />
            <path d="M4 12l7 0" />
            <path d="M4 18l7 0" />
            <path d="M15 15l3 3l3 -3" />
            <path d="M18 6l0 12" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              onClick={() => handleSorting("asc")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Low to High
            </a>
            <a
              onClick={() => handleSorting("desc")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              High to Low
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorting;
