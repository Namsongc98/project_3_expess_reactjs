import React from "react";
import HeadAdmin from "./componentAdmin/HeadAdmin";
import ProfileAdmin from "./componentAdmin/ProfileAdmin";

function Admin(props) {
  const { children } = props;

  return (
    <div className="">
      <HeadAdmin />
      <div className="flex h-full">
        <ProfileAdmin/>
        <div className="mt-10 ml-10 w-[80%]">{children}</div>
      </div>
    </div>
  );
}

export default Admin;
