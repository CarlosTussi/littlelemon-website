import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SideMenuProvider from './context/SideMenuProvider';
import PopUpProvider from './context/PopUpProvider';

function App() {
  return (
    <>
      <PopUpProvider>
        <SideMenuProvider>
          <Header/>
          <Main />
          <Footer />
        </SideMenuProvider>
      </PopUpProvider>
    </>
  );
}

export default App;
