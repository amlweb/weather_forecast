import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { HumidityIcon, TemperatureIcon, WindIcon } from "./Icons";

const WeatherResults = ({ results, selectedCity }) => {
  if (!results && typeof selectedCity === "undefined") return null;

  return (
    <Container className="mt-5">
      <h3>
        Today weather for <span className="text-primary">{selectedCity.name}</span>
      </h3>

      <div className="row mt-3">
        <div className="col-sm-4">
          <Card bg="light" className="text-center mb-2">
            <Card.Body>
              <TemperatureIcon />
              <Card.Title className="mt-3">Temperature</Card.Title>
              <span className="mt-3 text-primary h2">
                {selectedCity.temperature} &deg;C
              </span>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card bg="light" className="text-center mb-2">
            <Card.Body>
              <HumidityIcon />
              <Card.Title className="mt-3">Humidity</Card.Title>
              <span className="mt-3 text-primary h2">
                {selectedCity.humidity} %
              </span>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card bg="light" className="text-center mb-2">
            <Card.Body>
              <WindIcon />
              <Card.Title className="mt-3">Wind</Card.Title>
              <span className="mt-3 text-primary h2">
                {selectedCity.wind} m/s
              </span>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
    selectedCity: state.cities[0],
  };
};

export default connect(mapStateToProps)(WeatherResults);
