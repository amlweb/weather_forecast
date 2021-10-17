import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { HumidityIcon, TemperatureIcon, WindIcon } from "./Icons";

const WeatherPopular = ({results, cities}) => {
  if (!results) return null;
  
  return (
    <section className="bg-light">
      <Container className="mt-5">
        <h3>Compare weather in popular cities</h3>

        <div className="row">
          {cities.map((city, index) => (
            <div className="col-6 col-sm-4 col-lg-2" key={index.toString()}>
              <Card bg="light" border={index===0 ? 'secondary' : false} className="mt-3">
                <Card.Body>
                  <h5>{city.name}</h5>
                  <p className="mt-4">
                    <span className="text-primary"><TemperatureIcon /></span>
                    {city.temperature} &deg;C
                  </p>
                  <p>
                    <span className="text-primary"><HumidityIcon /></span>
                    {city.humidity} %
                  </p>
                  <p>
                    <span className="text-primary"><WindIcon /></span>
                    {city.wind} m/s
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
    
  )
}

const mapStateToProps = state => {
  return {
    results: state.results,
    cities: state.cities,
  };
};

export default connect(mapStateToProps)(WeatherPopular);
