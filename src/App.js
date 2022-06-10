import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/routers';
import Layout from '~/layout';
function App() {
    return (
       
            
            <Routes>
                {publicRouter.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
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
      
    );
}

export default App;
