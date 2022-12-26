import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <>
      <Link to={"home"}>
        <Button variant="secondary">
          <i className="fa fa-home icon-style"></i>
          Home
        </Button>{" "}
      </Link>
      <Link to={"game-configure"}>
        <Button variant="secondary">
          <i className="fa fa-cog icon-style" aria-hidden="true"></i>
          Setting
        </Button>{" "}
      </Link>
      <Link to={"reset"}>
        <Button variant="danger">
          <i className="fa fa-refresh icon-style"></i>
          Reset
        </Button>{" "}
      </Link>
    </>
  );
};

export default Menus;
