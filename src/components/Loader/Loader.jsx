import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => (
  <div className={s.load}>
    <RotatingLines
      visible={true}
      height="60"
      width="60"
      color="#9ACD32"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
