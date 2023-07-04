import React from "react";

import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const navigattion = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigattion.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
