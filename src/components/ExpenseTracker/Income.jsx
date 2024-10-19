/* eslint-disable react/prop-types */
import DeleteButton from "../actions/DeleteButton";
import EditButton from "../actions/EditButton";
import Filter from "../actions/Filter";
import Sorting from "../actions/Sorting";

const Income = ({
  incomeData,
  setFormData,
  formData,
  data,
  handleEdit,
  setMoneyCategory,
  moneyCategory,
}) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  // Filter the income data based on selected categories
  const filteredIncome =
    moneyCategory.length > 0 &&
    moneyCategory.some((category) =>
      incomeData.some((income) => income.category === category)
    )
      ? incomeData.filter((income) => moneyCategory.includes(income.category))
      : incomeData;
  return (
    <div className="border rounded-md relative">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
          </div>
          {/* Text */}
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>
        </div>
        <div>
          {/* Sorting */}
          <Sorting
            formData={formData}
            setFormData={setFormData}
            type="income"
          />

          {/* Filtering */}
          <Filter
            setMoneyCategory={setMoneyCategory}
            moneyCategory={moneyCategory}
            type="income"
            data={data}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {/* Row */}
        {filteredIncome.length > 0 ? (
          filteredIncome.map((income) => (
            <div
              key={income?.id}
              className="flex justify-between items-center py-2 relative group cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium leading-7 text-gray-600">
                  {income?.category}
                </h3>
                <p className="text-xs text-gray-600">
                  {formatDate(income?.date)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                  {income?.amount}
                </p>

                {/* 3 Dots */}
                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                  <EditButton
                   handleEdit={handleEdit}
                  id={income.id}
                  />
                  <DeleteButton
                    id={income.id}
                    setFormData={setFormData}
                    formData={formData}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">No income found.</div>
        )}
      </div>
    </div>
  );
};

export default Income;
