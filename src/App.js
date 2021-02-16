import React, { memo,Suspense } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router/index";
import store from "./store";

import HKAppHeader from "@/components/app-header";
import HKAppFooter from "@/components/app-footer";
import HYAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HKAppHeader />
        <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
        </Suspense>
        <HKAppFooter />
        <HYAppPlayerBar/>
      </HashRouter>
    </Provider>
  );
});
