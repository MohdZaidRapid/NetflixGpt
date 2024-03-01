import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );
  //       navigate("/browse");
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
