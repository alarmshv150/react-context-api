import { GlobalContext, decrease } from "../context/index";

const Decreaser = () => {
  const { dispatch } = GlobalContext();
  return <button onClick={() => dispatch(decrease(1))}>-1</button>;
};

export default Decreaser;
