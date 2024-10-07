import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import ManagerHomepage from "./pages/Managers/Home";
import ManagerLayout from "./components/Layouts/ManagerLayout";
function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        {publicRoute.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout ? DefaultLayout : React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route
          path="/restaurant"
          element={
            <ManagerLayout>
              <ManagerHomepage />
            </ManagerLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
