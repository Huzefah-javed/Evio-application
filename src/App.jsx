import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Layout } from "./layout/Layout";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { ContactUs } from "./Pages/Contact";
import { Blogs } from "./Pages/Blogs";
import { Properties } from "./Pages/Properties";
import { BlogDetail } from "./Pages/BlogDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
        { path: "/contact", element: <ContactUs /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/blogs/:blogId", element: <BlogDetail /> },
        { path: "/properties", element: <Properties /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
