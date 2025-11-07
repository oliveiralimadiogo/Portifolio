import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./Routes";
import MainLayout from "../layouts/MainLayout";
import ResumePage from "../pages/ResumePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ResumePage />,
      },
      {
        path: Routes.Projects,
        element: <ProjectsPage />,
      },
      {
        path: Routes.Contact,
        element: <ContactPage />,
      },
    ],
  },
  {
    path: Routes.ProjectDetails,
    element: <ProjectDetails />,
  },
]);


export default function AppRoute() {
  return <RouterProvider router={router} />
}
