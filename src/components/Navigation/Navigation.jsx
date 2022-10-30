import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Item, List, Footer, Main } from './NavigationStyle';
// import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <List>
            <Item>
              <NavLink to="/" end>
                Home
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/phoneBook">Phone book</NavLink>
            </Item>
          </List>
        </nav>
      </Wrapper>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <p>Copyright &copy; by Volodymyr Bashtanyuk</p>
      </Footer>
    </>
  );
};

// fallback={<Loader />}
