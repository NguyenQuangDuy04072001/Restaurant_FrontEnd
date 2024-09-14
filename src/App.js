import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";
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
      </Routes>
    </Router>
  );
}

export default App;
