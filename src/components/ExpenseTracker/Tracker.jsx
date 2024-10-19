/* eslint-disable react/prop-types */


const Tracker = ({ data, handleSubmit, isActive, setIsActive, dataToEdit, setEditFormData, editFormData }) => {



  const getCategories = (money) =>
    isActive === "expense" ? money.categories.expense : money.categories.income;

  const handleToggle = (toggle) => {
    setIsActive(toggle);
    const newCategory =
      toggle === "expense"
        ? data[0].categories.expense[0]
        : data[0].categories.income[0];
    setEditFormData((prev) => ({ ...prev, category: newCategory }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      id: dataToEdit?.id || crypto.randomUUID(), // Reuse ID if editing
      amount: Number(editFormData.amount) || 0,
      date: editFormData.date || new Date().toISOString().split("T")[0],
      type: isActive,
      category: editFormData.category,
    };
    handleSubmit(submittedData);
  };

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800">
        Expense Tracker
      </h2>
      <form onSubmit={onFormSubmit}>
        {/* Toggle Buttons */}
        <div className="flex divide-x divide-slate-400/20 rounded-md bg-white shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            onClick={() => handleToggle("expense")}
            className={`cursor-pointer flex-1 px-4 py-2 text-center ${
              isActive === "expense" ? "active" : ""
            }`}
          >
            Expense
          </div>
          <div
            onClick={() => handleToggle("income")}
            className={`cursor-pointer flex-1 px-4 py-2 text-center ${
              isActive === "income" ? "active" : ""
            }`}
          >
            Income
          </div>
        </div>

        {/* Category Select */}
        <div className="mt-3">
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              value={editFormData.category}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5"
            >
              {getCategories(data[0]).map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Amount Input */}
        <div className="mt-3">
          <label htmlFor="amount" className="block text-sm font-medium">
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              value={editFormData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="block w-full rounded-md border-0 py-1.5"
            />
          </div>
        </div>

        {/* Date Input */}
        <div className="mt-3">
          <label htmlFor="date" className="block text-sm font-medium">
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              value={editFormData.date}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-teal-600 px-8 py-2 text-sm text-white rounded-md hover:bg-teal-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Tracker;
