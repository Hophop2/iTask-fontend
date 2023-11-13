import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import BoardPage from "./pages/BoardPage";

import AddNewTask from "./features/task/AddNewTask";
import TaskInfo from "./features/task/TaskInfo";
import EditTask from "./features/task/EditTask";
import AppLayout from "./layouts/appLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="reg" element={<RegisterPage />} />

        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route element={<AppLayout />}>
              <Route path="dash">
                <Route index element={<MainPage />} />
              </Route>
              <Route path="board/:boardId">
                <Route index element={<BoardPage />} />
                <Route path="add" element={<AddNewTask />} />

                <Route path="tasks/:taskId" element={<TaskInfo />} />
                <Route path="edit/:taskId" element={<EditTask />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
