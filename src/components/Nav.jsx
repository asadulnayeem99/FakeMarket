import React from "react";

const Nav = ({ filter }) => {
  return (
    <div className="flex items-center justify-center gap-[300px] bg-green-700">
      <div>
        <h1 className="text-[50px] font-bold text-vio">Market</h1>
      </div>
      <div>
        <input
          className="rounded-sm p-5 h-10 w-48"
          onChange={filter}
          type="text"
          name=""
          placeholder="Search..."
          id=""
        />
      </div>
    </div>
  );
};

export default Nav;
