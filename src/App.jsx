import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout";
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout-komponenten bruges som det overordnede layout - altså den ramme om indholder, der altid vises
    children: [
      {
        index: true,
        element: <Frontpage />, // Når brugeren navigerer til rod-URL'en (/), omdirigeres de automatisk til /om
      },
      {
        path: '/projects',
        element: <Projects />, // Komponentet Om vises, når brugeren navigerer til /om
      },

      {
        path: '/about',
        element: <About />, // Komponentet GDPR vises, når brugeren navigerer til /gdpr
      },
      {
        path: '/contact',
        element: <Contact />, // Komponentet ItSikkerhed vises, når brugeren navigerer til /itSikkerhed
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={Router} />;
}
