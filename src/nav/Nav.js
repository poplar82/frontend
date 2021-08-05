function Nav(props) {
    return (
        <nav className="nav">
            <div className="container">
                <img className="logo" alt="logo" src={props.title} />
            </div>
        </nav>
    );
}
export default Nav;
