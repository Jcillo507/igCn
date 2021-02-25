import React from 'react'
import useUser from "../../hooks/use-user";

const Sidebar = ()=>{
    const {
      user: { fullName, username, userId },
    } = useUser();

    return (
      <div className="p-4">
        <p>I am the sidebar</p>
      </div>
    );
}
export default Sidebar