import Menu from 'components/menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'assets/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';


export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='prato/:id' element={<Prato />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
