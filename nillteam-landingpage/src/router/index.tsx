import React,{ lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

// const Router = () => {

//   const route = (
//     <Switch>
//       {routes.map((routeItem) => {
//         return (
//           <Route
//             key={routeItem.component}
//             path={routeItem.path}
//             exact={routeItem.exact}
//             component={lazy(() => import(`../pages/${routeItem.component}`))}
//           />
//         );
//       })}
//     </Switch>
//   )

//     console.log(route);

//   return (
//     route
//   );
// };

export default Router;
