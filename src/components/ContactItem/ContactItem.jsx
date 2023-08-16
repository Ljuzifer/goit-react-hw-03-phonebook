export const ContactItem = ({ details: { name, number, id }, onDelete }) => {
  return (
    <>
      <span>{name}:</span>
      <span>{number} </span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
