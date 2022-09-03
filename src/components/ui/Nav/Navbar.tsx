import NavLinks from './NavLinks';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {
  return (
    <Fade duration={1700} triggerOnce>
      <nav className="navbar hidden md:block ">
        <NavLinks />
      </nav>
    </Fade>
  );
};

export default Navbar;
