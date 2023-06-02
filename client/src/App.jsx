import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routers/index.jsx";
import DefaultLayout from "./component/Layout/index.jsx";
import PriviteRouter from "./routers/PriviteRouter.jsx";
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            {/* publicRoutes */}
            {publicRoutes.map((route, index) => {
              const Layout = route.layout || DefaultLayout;
              const Page = route.component;
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

            <Route element={ <PriviteRouter/>  }>
              {privateRoutes.map((route, index) => {
                const Layout = route.layout || DefaultLayout;
                const Page = route.component;
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
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
