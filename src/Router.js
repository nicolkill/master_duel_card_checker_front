import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import React from 'react';

import { StateProvider } from "./state/global_state/StateProvider";

import Index from "./screens/landing/index/Index";
import Landing from "./screens/landing/Landing";
import NotFound from "./screens/not_found/NotFound";
import NotificationDisplay from "./components/notifications/NotificationDisplay";

function Router() {
  return (
    <StateProvider>
      <StateInitializer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} >
              <Route index element={<Index />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </StateInitializer>
    </StateProvider>
  );
}


function StateInitializer({ children }) {
  return (
    <div>
      <NotificationDisplay />
      { children }
    </div>
  );
}

export default Router;
