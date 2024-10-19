const EditButton = ({id, handleEdit}) => {
  
  return (
    <>
    <button
    onClick={() =>handleEdit(id)}
    className="hover:text-teal-600"
    role="button"
    title="Edit Button"
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
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  </button>
  
    </>
  );
};

export default EditButton;


// const EditButton = ({id, setEditDataById, setIsActive, type, setFO}) => {
//   function handleEdit(e){
//     e.preventDefault();
//     setIsActive(type)
//     setEditDataById(id)
//   }
 

//   return (
//     <>
//     <button
//     onClick={handleEdit}
//     className="hover:text-teal-600"
//     role="button"
//     title="Edit Button"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
//       <path d="M13.5 6.5l4 4" />
//     </svg>
//   </button>
  
//     </>
//   );
// };

// export default EditButton;