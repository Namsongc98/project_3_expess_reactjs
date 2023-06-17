import React, { useEffect, useState } from "react";

import "./Admin.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminUser() {
  const [userData, setUserData] = useState();
  const UserDataNotAdmin = userData?.filter((user)=>user.roles==="user")
 


// get user
  let accepToken = useSelector((state) => state.user.token);
  const dataUser = async (accepToken) => {
    try {
      const response = await axios.get("http://localhost:8080/users", {
        headers: { token: `Bearer ${accepToken}` },
      });
      setUserData(response.data.data);
      return userData;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    dataUser(accepToken);
  }, []);

//delete user
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:8080/users/delete/" + id, {
        headers: { token: `Bearer ${accepToken}` },
      });
      dataUser(accepToken);
    } catch (error) {
      console.log(error)
      throw new Error(error);
    }
  };
  const handleEdit = () => {
    e.preventDefault();
  };
 


  return (
    <div className="mt-10">
      <div className="w-[100%] h-[60px] text-4xl font-semibold text-blue-800 ">
        <h1 className="text-center leading-[60px] hover:underline  hover:decoration-solid">
          List Khách hàng
        </h1>
      </div>
      <div className="wp-table w-[100%] ">
        <table className=" table w-[100%]">
          <thead className="head-table bg-gray-200 ">
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Email</th>
              <th>Role</th>
              <th> Xóa</th>
              <th>Sửa </th>
            </tr>
          </thead>
          <tbody>
            {UserDataNotAdmin?.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.firstname + " " + " " + user.lastname}</td>
                <td>{user.email_user}</td>
                <td>{user.roles}</td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, user.id_user)}
                    className="btn btn-delete"
                  >
                    Xóa
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleEdit(e)}
                    className="btn btn-edit"
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUser;
