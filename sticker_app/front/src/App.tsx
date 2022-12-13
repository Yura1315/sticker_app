import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import { setupStore } from './store/store';
const store = setupStore();

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
      </Route>
    </Routes>
  </Provider>
);

export default App;
