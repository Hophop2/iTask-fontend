import { store } from "../../app/store";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { userStatsApiSlice } from "../dashboard/userStats/userStatsApiSlice";
import { monthGoalApiSlice } from "../dashboard/monthgoal/monthGoalApiSlice";
import { weatherApiSlice } from "../dashboard/weather/weatherApiSlice";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      monthGoalApiSlice.util.prefetch("getMonthGoals", "MonthGoal", {
        force: true,
      })
    );
  }, []);

  return <Outlet />;
};
export default Prefetch;
