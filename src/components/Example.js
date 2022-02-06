import { useState } from "react";
import Example2 from "./Example2";

const Example = ({ team }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {console.log(team)}
      <p>{team.length >= 1 ? team[0].name : <>not superior to 1</>}</p>
      <Example2 count={count} />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default Example;
