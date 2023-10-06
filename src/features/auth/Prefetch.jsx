import { store } from "../../app/store";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { userStatsApiSlice } from "../dashboard/userStats/userStatsApiSlice";

const Prefetch = () => {
  useEffect(() => {
    // store.dispatch(
    //   userStatsApiSlice.util.prefetch(
    //     "GetStatusTasksCountByUser",
    //     "userStats",
    //     { force: true }
    //   )
    // );
  }, []);

  return <Outlet />;
};
export default Prefetch;
