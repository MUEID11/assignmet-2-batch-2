import { useState } from "react";

import TotalBalanceSheet from "./TotalBalanceSheet";
import Tracker from "./Tracker";
import Expense from "./Expense";
import Income from "./Income";

const TrackerBoard = () => {
  const initialData = {
    id: crypto.randomUUID(),
    categories: {
      income: ["Salary", "Outsourcing", "Bond", "Dividend"],
      expense: [
        "Education",
        "Food",
        "Health",
        "Bill",
        "Insurance",
        "Tax",
        "Transport",
        "Telephone", 
      ],
    },
    amount: Number,  
    date: new Date().toISOString().split("T")[0],
  };
  
  const [data, setData] = useState([initialData]);
  //state of toggle for tracker
  const [isActive, setIsActive] = useState( "expense");
  //sated of saved data
  const [formData, setFormData] = useState([]);
  //state of edit
  const [editFormData, setEditFormData] = useState({
    category: data.length > 0 ? data[0].categories.expense[0] : "",
    amount: "",
    date: "",
  });
  const [editDataById, setEditDataById] = useState('');
  //state of filter
  const [moneyCategory, setMoneyCategory] = useState([]);

  //seperate expense data
  const expenseData = formData.filter(item => item.type === "expense");
  const incomeData = formData.filter(item => item.type === 'income');
  

  const dataToEdit = formData.find(item => item.id === editDataById);


  function handleEdit(id){
    const editItem = formData.find(item => item.id === id);
    setEditDataById(id)
    setIsActive(editItem.type)
    setEditFormData({
      category: editItem.category,
      amount: editItem.amount,
      date: editItem.date || new Date().toISOString().split("T")[0],
    });
  }

  function handleSubmit(submittedData) {
    if(editDataById){
      setFormData(formData.map(data => {
        if(data.id === editDataById){
          return submittedData;
        }
        return data;
      }))
    }else{
      setFormData((prev) => [...prev, submittedData]);
    }
  }
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Submission Form --> */}
        <Tracker data={data} handleSubmit={handleSubmit} editFormData={editFormData} setEditFormData={setEditFormData} dataToEdit={dataToEdit} setIsActive={setIsActive} isActive={isActive}/>
        {/* 
        <!-- Right Column --> */}
        <div className="lg:col-span-2">
          {/* <!-- Total Balance Stat--> */}
          <TotalBalanceSheet expenseData={expenseData} incomeData={incomeData}/>

          {/* <!-- List Down --> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {/* <!-- Expense --> */}
            <Expense expenseData={expenseData} setFormData={setFormData} formData={formData} data={data} setEditDataById={setEditDataById} setIsActive={setIsActive} setMoneyCategory={setMoneyCategory} moneyCategory={moneyCategory} handleEdit={handleEdit}/>

            {/* <!-- Income --> */}
            <Income incomeData={incomeData} setFormData={setFormData}  formData={formData} data={data} setEditDataById={setEditDataById} setIsActive={setIsActive}  setMoneyCategory={setMoneyCategory} moneyCategory={moneyCategory} handleEdit={handleEdit}/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrackerBoard;
