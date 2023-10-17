import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">The Padel Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
      </ul>
      <span className="navbar-text">
        <CartWidget />
      </span>
    </div>
  </div>
</nav>
    )
}

export default NavBar;