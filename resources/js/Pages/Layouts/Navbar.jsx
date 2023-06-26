import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <img src="/assets/imgs/logo.svg" alt="" />
                </Link>
                <div className="socials">
                    <a href="#"><i className="ti-facebook"></i></a>
                    <a href="#"><i className="ti-twitter"></i></a>
                    <a href="#"><i className="ti-pinterest-alt"></i></a>
                    <a href="#"><i className="ti-instagram"></i></a>
                    <a href="#"><i className="ti-youtube"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;