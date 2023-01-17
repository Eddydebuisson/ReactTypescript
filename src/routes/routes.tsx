import {  RouteObject ,useRoutes } from "react-router-dom";
import Count from "../component/count/count";
import HeroDetails from "../pages/herosDetail";
import HeroLists from "../pages/herosList";
import Forms from "../component/form/form";
import Get from "../component/fetch/get";
import GetId from "../component/fetch/getId";
const Router: React.FC = () => {
const routes: RouteObject[] = [
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/",
    element: <HeroLists/>
  },
  {
    path: "/:id",
    element:<HeroDetails/>
  },
  {
    path: "/form",
    element: <Forms/>
  },{
    path: "/get",
    element: <Get/>
  },
  {
    path:"/get/:id",
    element: <GetId/>
  }
];

return <> {useRoutes(routes)}</>
}

export default Router;
