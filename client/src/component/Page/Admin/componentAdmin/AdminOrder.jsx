import React from "react";

function AdminOrder() {
  return (
    <div className="mt-10">
      <div className="w-[100%] h-[60px] text-4xl font-semibold text-blue-800 ">
        <h1 className="text-center leading-[60px] hover:underline  hover:decoration-solid">
          List đơn hàng
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrder;
