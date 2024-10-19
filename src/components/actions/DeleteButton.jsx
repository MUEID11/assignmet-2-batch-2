const DeleteButton = ({ id, setFormData, formData }) => {
  function handleDelete(e) {
    e.preventDefault();
    // Correct the filter condition to remove the item with the matching id
    
    const isConfirmed = confirm("Are you sure you want to delete?")
    if(isConfirmed){
      const remainingData = formData.filter(data => data.id !== id);
      setFormData(remainingData);
    }
    console.log(id)
  }

  return (
    <button
      onClick={handleDelete}
      className="hover:text-red-600"
      role="button"
      title="Delete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 7l16 0" />
        <path d="M10 11l0 6" />
        <path d="M14 11l0 6" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg>
    </button>
  );
};

export default DeleteButton;
