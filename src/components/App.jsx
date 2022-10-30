import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './Navigation/Navigation';
import { HomePage } from 'Pages/HomePage/HomePage';
import { ContactsPage } from 'Pages/ContactPage/ContactPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/phoneBook" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
