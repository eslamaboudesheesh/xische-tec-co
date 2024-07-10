import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { paths } from './routes/paths';
import Layout from './layout';
import MostPopularArticlePage from './pages/MostPopularArticlePage';

const App = () => (
  <Routes>
    <Route path="*" element={<Navigate to={{ pathname: paths.general }} />} />
    <Route
      path={paths.general}
      element={
        <Layout>
          <MostPopularArticlePage />
        </Layout>
      }
    />
  </Routes>
);

export default App;
