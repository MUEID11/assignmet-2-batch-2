/* eslint-disable react/prop-types */


const TotalBalanceSheet = ({ expenseData, incomeData }) => {


    const totalIncome = incomeData.reduce((total, item) => total + Number(item.amount), 0);
    const totalExpense = expenseData.reduce((total, item) => total + Number(item.amount), 0);
    const balance = totalIncome - totalExpense;


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Balance</dt>
            <dd className={`order-first text-xl font-semibold tracking-tight  sm:text-3xl ${balance < 0 ? 'text-red-600': 'text-gray-700'}`}>
              {balance}
            </dd>
          </div>
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Total Income</dt>
            <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
              {totalIncome}
            </dd>
          </div>
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Total Expense</dt>
            <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
              {totalExpense}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TotalBalanceSheet;
