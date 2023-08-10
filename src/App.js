import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./Pages/Home/Home";
import "./App.css";
import Routing from "./Routing";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <>
      {/* <Container fluid>
        <NavigationBar />
      </Container> */}
      <Routing />
    </>
  );
}

export default App;
