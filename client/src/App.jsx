import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routers/index.jsx";
import DefaultLayout from "./component/Layout/index.jsx";
import PriviteRouter from "./routers/PriviteRouter.jsx";
import Admin from "./component/Page/Admin/Admin.jsx";
// import NotPound from"./component/Page/NotPound"
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
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

            {/* <Route path="*" element={<NotPound/>} /> */}

            <Route element={<PriviteRouter />}>
              {privateRoutes.map((route, index) => {
                const Page = route.component;
                const Layout = Admin;

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
