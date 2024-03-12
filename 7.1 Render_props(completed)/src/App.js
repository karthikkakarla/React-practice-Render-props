import React, {useState, createRef} from "react";
import Weather from "./Components/Weather";

const App = () => {
  const locationInput = createRef();
  const [location, setLocation] = useState("Bengaluru");
  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Type a location..."
        ref={locationInput}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            setLocation(e.target.value);
            locationInput.current.value = "";
          }
        }}
      />
     <Weather location={location} render={({isLoading,error,temperature,conditions,icon,place})=> !error ? (
      isLoading ? (<div classNmae="loading">Is Loading...</div>) : (<div className="result">
      <div className="place">{place}</div>
      <div className="temperature">{temperature}&deg;C</div>
      <div className="conditions">{conditions.join(",")}</div>
      <img
        src={icon}
        alt={conditions.join(",")}
        className="icon"
      />
      </div>)
     ) : (<div className ="error">There was an error Fetching Data</div>)}/>
    </div>
  );
};

export default App;

