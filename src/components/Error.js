import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  return (
    <div className="bg-slate-800 h-screen w-screen flex justify-center items-center text-white text-3xl">
      <h1 className="m-4 ">OOPS</h1>
      <h2 className="m-4">Something went wrong!!</h2>
      <h3 className="m-4">Page not found</h3>
    </div>
  );
};

export default Error;
