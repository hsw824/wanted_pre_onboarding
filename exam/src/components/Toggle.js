import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  const onClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="Toggle">
      <div className="container" onClick={onClick}>
        <div className="box box1">
          <span>기본</span>
        </div>
        <div className="box box2">
          <span>상세</span>
        </div>
        {toggle ? (
          <div className="circle"></div>
        ) : (
          <div className="circle active"></div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
