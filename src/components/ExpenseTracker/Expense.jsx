/* eslint-disable react/prop-types */
import DeleteButton from "../actions/DeleteButton";
import EditButton from "../actions/EditButton";
import Filter from "../actions/Filter";
import Sorting from "../actions/Sorting";

const Expense = ({
  expenseData,
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

  // Filter the expenses based on the selected categories
  const filteredExpenses = moneyCategory.length > 0 && moneyCategory.some(category => 
    expenseData.some(expense => expense.category === category)
  )
  ? expenseData.filter(expense => moneyCategory.includes(expense.category))
  : expenseData;

  return (
    <div className="border rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
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
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-8m-3.413 .584a2 2 0 0 0 1.413 3.416h2m4 0h6a1 1 0 0 1 1 1v3" />
              <path d="M19 19a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
              <path d="M16 12h4v4m-4 0a2 2 0 0 1 -2 -2" />
              <path d="M3 3l18 18" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        {/* Sorting and Filtering Column */}
        <div>
          <Sorting
            setFormData={setFormData}
            formData={formData}
            type="expense"
          />
          <Filter
            type="expense"
            data={data}
            setMoneyCategory={setMoneyCategory}
            moneyCategory={moneyCategory}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <div
              key={expense?.id}
              className="flex justify-between items-center py-2 relative group cursor-pointer"
            >
              <div>
                <h3 className="text-base font-medium leading-7 text-gray-600">
                  {expense?.category}
                </h3>
                <p className="text-xs text-gray-600">
                  {formatDate(expense?.date)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                  {expense?.amount}
                </p>
                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                  <EditButton
                    handleEdit={handleEdit}
                    id={expense.id}
                  />
                  <DeleteButton
                    id={expense.id}
                    setFormData={setFormData}
                    formData={formData}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            No expenses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Expense;
