import Header from "./layout/Header/Header";
import Aside from "./layout/Aside/Aside";
import { useFetch } from "./utils/hooks/Fetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nutrients from "./components/nutrients/Nutrients";

function App() {
  const getId = useParams();
  const user = parseInt(getId.userId);

  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/user/${user}`
  );

  // console.log(mainUser[0].data);
  console.log(data.data.keyData.calorieCount);
  // console.log(typeof mainUser);
  // console.log(user);

  const testArr = [];
  testArr.push(data.data.keyData);
  console.log(testArr);

  let test = Object.values(data.data.keyData);
  console.log(test);

  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="main-text">
        <h1 className="main-text-title">
          Bonjour{" "}
          <span className="main-text-name">
            {data.data.userInfos.firstName}
          </span>
        </h1>
        <p className="main-text-content">HELLO</p>
      </div>
      {Object.entries(data.data.keyData).map(([key, value], index) => (
        <Nutrients key={index} food={key} quantity={value} />
      ))}
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
