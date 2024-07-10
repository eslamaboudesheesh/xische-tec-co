import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { paths } from './routes/paths';
import Layout from './layout';
import MostPopularArticlePage from './pages/MostPopularArticlePage';
import ArticleDetailPage from './pages/articleDetailsPage';

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
    <Route
      path={paths.details}
      element={
        <Layout>
          <ArticleDetailPage />
        </Layout>
      }
    />
  </Routes>
);

export default App;
