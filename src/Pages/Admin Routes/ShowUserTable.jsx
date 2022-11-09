import React from "react";

const ShowUserTable = ({ user, idx, removeUser, makeAdmin }) => {
  const { name, email, _id } = user;
  return (
    <>
      <tr>
        {/* <th>{idx + 1}</th> */}
        <td className="font-semibold text-accent font-sans text-xl">{name}</td>
        <td>{email}</td>
        <td>
          <button
            onClick={() => removeUser(_id)}
            className="btn btn-sm hover:bg-primary hover:shadow hover:text-accent transition duration-150 bg-accent text-white"
          >
            Remove user
          </button>
        </td>
        <td>
          <button
            onClick={() => makeAdmin(_id)}
            className="btn btn-sm bg-primary hover:shadow text-accent transition duration-150 hover:bg-accent hover:text-white"
          >
            Make Admin
          </button>
        </td>
      </tr>
    </>
  );
};

export default ShowUserTable;
