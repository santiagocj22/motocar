import { paths } from "./paths";
import { AboutUs, Contact, OurOfferts } from "../pages";

export const routes = [
  {
    name: "Acerca de nosotros",
    element: <AboutUs />,
    path: paths.ABOUT_US,
    index: false,
  },
  {
    name: "Nuestras ofertas",
    element: <OurOfferts />,
    path: paths.OUR_OFFERINGS,
    index: false,
  },
  {
    name: "Contacto",
    element: <Contact />,
    path: paths.CONTACT,
    index: false,
  },
];
