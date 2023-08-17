// import { PiArmchairBold } from 'react-icons/pi';

export const ContactItem = ({ details: { name, number, id }, onDelete }) => {
  return (
    <>
      {/* <PiArmchairBold /> */}

      <span>{name}</span>
      <div>
        <span>{number} </span>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};
