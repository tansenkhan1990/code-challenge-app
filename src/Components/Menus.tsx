import { Button } from "react-bootstrap";

const Menus = () => {
  return (
    <>
      <Button variant="primary">
        <i className="fa fa-home icon-style"></i>
        Home
      </Button>{" "}
      <Button variant="success">
        <i className="fa fa-cog icon-style" aria-hidden="true"></i>
        Setting
      </Button>{" "}
      <Button variant="danger">
        <i className="fa fa-refresh icon-style"></i>
        Reset
      </Button>{" "}
    </>
  );
};

export default Menus;
