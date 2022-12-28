import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} />
      </div>
      <nav>
        <NavLink to='/recipes' title='Receitas'>
          Receitas
        </NavLink>
        <NavLink to='/recipes' title='Receitas'>
          Blog
        </NavLink>
      </nav>
      <button>Login</button>
    </HeaderContainer>
  );
}