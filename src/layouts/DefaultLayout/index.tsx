import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <main>
        <Header />
        <SearchForm />
        <Outlet />
      </main>
    </LayoutContainer>
  );
}