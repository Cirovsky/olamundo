import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Home from 'pages/Home';
import About from 'pages/About';
import Article from 'pages/Article';
import PageNotFound from 'pages/PageNotFound';

import ScrollToTop from 'components/ScrollToTop';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/styles.css';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Header />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='sobremim' element={<About />} />
          </Route>
          <Route path='posts/:id/*' element={<Article />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )

}

export default App
