import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";
import { useFetch } from "../../utils/hooks/Fetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nutrients from "../../components/nutrients/Nutrients";
import DailyCharts from "../../components/dailyCharts/DailyCharts";
import { useEffect } from "react";

function App() {
  const getId = useParams();
  const user = parseInt(getId.userId);

  const {
    data: weightData,
    isLoading: weightIsLoading,
    error: weightError,
  } = useFetch(
    `https://p12-backend-production.up.railway.app/user/${user}/activity`
  );

  // `https://sportsee.abcoding.fr/user/${user}/activity`
  // useFetch(`http://localhost:3000/user/${user}/activity`)
  // `
  // http://localhost:3000/user/${user}
  // `
  // `https://sportsee.abcoding.fr/user/${user}`;

  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = useFetch(`https://p12-backend-production.up.railway.app/user/${user}`);

  if (weightIsLoading || userIsLoading) {
    return <div>Loading...</div>;
  }

  if (weightError || userError) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="main-text">
        <h1 className="main-text-title">
          Bonjour
          <span className="main-text-name">
            {userData.data.userInfos.firstName}
          </span>
        </h1>
        <p className="main-text-content">HELLO</p>
      </div>

      {Object.entries(userData.data.keyData).map(([key, value], index) => (
        <Nutrients key={index} food={key} quantity={value} />
      ))}

      <DailyCharts data={weightData.data.sessions} />
    </div>
  );
}

export default App;

/* {data.data.keyData.map((elem, index) => (
        <Nutrients
          key={index}
          calorie={elem.calorieCount}
          protein={elem.proteinCount}
          carb={elem.carbohydrateCount}
          lipit={elem.lipidCount}
        />
      ))} */

// {test.map((elem, index) => (
//   <Nutrients key={index} food={elem} />
// ))}
