import "./Header.css";

const Header = () => {
  return (
    <header>
      <h2 style={{ cursor: "pointer" }}>
        <a href="/main" style={{ textDecoration: "none", color: "black" }}>
          COLLEGE-IGN
        </a>
      </h2>
    </header>
  );
};

export default Header;
