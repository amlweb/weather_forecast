import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { addCity, cleanCities, showResults } from "../actions";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const POPULAR_CITIES = ["Warszawa", "Gdańsk", "Poznań", "Wrocław", "Katowice"];

const WeatherForm = ({addCity, showResults, cleanCities}) => {
  const [error, setError] = useState(false);
  const cityInput = useRef(null);
  const { city } = useParams();

  const getWeather = selectedCity => {
    // remove duplicates from popular if selected is one of them
    const filteredCities = POPULAR_CITIES.filter(city => city.toLowerCase() !== selectedCity.toLowerCase());

    // get weather from all cities
    Promise.all([selectedCity, ...filteredCities].map(city => getCityData(city)))
      .then(responses => {
        return Promise.all(responses.map(response => {
          return response.json();
        }));
      })
      .then(data => { 
        data.map(city => addCity(city.name, city.main.temp, city.main.humidity, city.wind.speed));
        showResults();
      })
      .catch(function (error) {
        cleanCities();
        setError(true);
        console.error(error);
      });
  }

  useEffect(() => {
    if (city.length) {
      console.log(city);
      getWeather(city);
    } 
    return () => {}
  }, [city]);  

  const getCityData = city => {
    return fetch(
      API_URL +
        new URLSearchParams({
          appid: "9bedabbf51bdec672c40fdae0a5b3899",
          q: city,
          units: 'metric'
        })
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

    // get selected city value
    const selectedCity = cityInput.current.value;

    // clean prev search
    cleanCities();
    setError(false);

    // get weather of selected city and popular
    getWeather(selectedCity);
  };

  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <Container className="py-3 mt-5">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
              <header className="pb-20">
                <h1 className="text-white">See your weather forecast</h1>
                <p>&amp; compare with most popular cities</p>
              </header>

              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-10">
                    <Form.Control ref={cityInput} name="city" type="text" size="lg" placeholder="Put a city name" />
                  </div>
                  <div className="col-sm-2">
                    <Button variant="outline-primary" size="lg" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Container>
      </div>

      {error &&
        <Container className="mt-5">
          <h3>No search results</h3>
        </Container>
      }
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedName: state.selectedName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: (name, temperature, humidity, wind) => dispatch(addCity(name, temperature, humidity, wind)),
    showResults: () => dispatch(showResults()),
    cleanCities: () => dispatch(cleanCities()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);
