import React from "react";

const ShowUserTable = ({ user, idx, removeUser, makeAdmin }) => {
  const { name, email, _id, role } = user;
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{email}</td>
        <td>
          <button
            onClick={() => removeUser(_id)}
            className="btn btn-sm hover:bg-primary hover:shadow hover:text-accent transition duration-150 bg-accent text-white"
          >
            Remove user
          </button>
        </td>
        {role === "admin" ? (
          <td><button className="btn text-white bg-orange-500 rounded">Already Admin</button></td>
        ) : (
          <td>
            <button
              onClick={() => makeAdmin(email)}
              className="btn btn-sm bg-primary hover:shadow text-accent transition duration-150 hover:bg-accent hover:text-white"
            >
              Make Admin
            </button>
          </td>
        )}
      </tr>
    </>
  );
};

export default ShowUserTable;
