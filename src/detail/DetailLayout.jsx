import React from "react";

const DetailLayout = () => {
  return (
    <div>
      <div>디테일 레이아웃</div>
      <div>
        <outlet />
      </div>
    </div>
  );
};

export default DetailLayout;
