import { useFetch } from "../../utils/hooks/Fetch";
import { useParams } from "react-router-dom";

import Nutrients from "../../components/nutrients/Nutrients";
import DailyCharts from "../../components/dailyCharts/DailyCharts";
import AverageSession from "../../components/averageSession/AverageSession";
import Performance from "../../components/performance/Performance";
import Goal from "../../components/goal/Goal";
import Spinner from "../../components/Spinner/Spinner";

import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";

import "./style.scss";

/**
 * Render the App page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */

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

  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = useFetch(`https://p12-backend-production.up.railway.app/user/${user}`);

  const {
    data: sessionData,
    isLoading: sessionIsLoading,
    error: sessionError,
  } = useFetch(
    `https://p12-backend-production.up.railway.app/user/${user}/average-sessions`
  );

  const {
    data: performanceData,
    isLoading: performanceIsLoading,
    error: performanceError,
  } = useFetch(
    `https://p12-backend-production.up.railway.app/user/${user}/performance`
  );

  if (
    weightIsLoading ||
    userIsLoading ||
    sessionIsLoading ||
    performanceIsLoading
  ) {
    return <Spinner />;
  }

  if (weightError || userError || sessionError || performanceError) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="wrapper-dashboard">
        <div className="profil">
          <div className="main-text">
            <h1 className="main-text-title">
              Bonjour {""}
              <span className="main-text-name">
                {userData.data.userInfos.firstName}
              </span>
            </h1>
            <p className="main-text-content">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="dashboard">
            <div className="dashboard-main">
              <div className="dashboard-main-dailycharts-container">
                <div className="dashboard-main-dailycharts">
                  <DailyCharts data={weightData.data.sessions} />
                </div>
              </div>
              <div className="dashboard-main-smallgraph-container">
                <div className="dashboard-main-smallgraph-container-1">
                  <AverageSession data={sessionData.data.sessions} />
                </div>
                <div className="dashboard-main-smallgraph-container-2">
                  <Performance data={performanceData.data.data} />
                </div>
                <div className="dashboard-main-smallgraph-container-3">
                  <Goal data={userData.data} />
                </div>
              </div>
            </div>
            <div className="dashboard-cards">
              {Object.entries(userData.data.keyData).map(
                ([key, value], index) => (
                  <Nutrients key={index} food={key} quantity={value} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
