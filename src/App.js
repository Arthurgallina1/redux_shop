import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { ToastContainer } from 'react-toastify'
import GlobalStyle from './styles/global'
import Header from './components/Header/index'
import { Provider } from 'react-redux';
import history from './services/history'
import store from './store'


function App() {
  return (
   <Provider store={store}>
      <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
      </Router>
   </Provider>  );
}

export default App;
