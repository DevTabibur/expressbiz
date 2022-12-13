import React from "react";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";

const Users = () => {
  const [users] = useUser();
  const localID = localStorage.getItem("user_id");
  const getID = JSON.parse(localID);

  // console.log("localID", localID);
  // console.log("getID", getID);

  const removeUser = (id) => {
    const url = `http://localhost:5000/register/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data deleted", data);
        if (data.deletedCount) {
          Swal.fire({
            title: "DELETED",
            icon: "success",
          });
        }
        // user automatically logout
      });
  };

  const makeAdmin = (email) => {
    const confirmation = window.confirm("Are you want to make admin?");
    if (confirmation) {
      const url = `http://localhost:5000/user/admin/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            Swal.fire({
              title: "Failed to make admin",
              icon: "error",
            });
          }
          return res.json();
        })
        .then((data) => {
          // console.log("data posted admin", data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Made an Admin",
              icon: "success",
            });
          }
        });
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 ">
        <h1 className="text-accent font-bold text-3xl font-sans mb-4">
          Total User : {users.length}
        </h1>
        <div className="grid md:grid-cols-1 gap-4">
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role !== "admin" && (
                        <button
                          onClick={() => removeUser(user._id)}
                          className="btn btn-sm hover:bg-primary hover:shadow hover:text-accent transition duration-150 bg-accent text-white"
                        >
                          Remove user
                        </button>
                      )}
                    </td>
                    {user.role === "admin" ? (
                      <td>
                        <button className="btn text-white bg-orange-500 rounded">
                          Already Admin
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button
                          onClick={() => makeAdmin(user.email)}
                          className="btn btn-sm bg-primary hover:shadow text-accent transition duration-150 hover:bg-accent hover:text-white"
                        >
                          Make Admin
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>SL</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
