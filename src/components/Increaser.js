import { GlobalContext, increase } from "../context/index";

const Increaser = () => {
  const { dispatch } = GlobalContext();
  return <button onClick={() => dispatch(increase(1))}>+1</button>;
};

export default Increaser;
