import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import { setupStore, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
const store = setupStore;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<MainContainer />} />
        </Route>
      </Routes>
    </PersistGate>
  </Provider>
);

export default App;
