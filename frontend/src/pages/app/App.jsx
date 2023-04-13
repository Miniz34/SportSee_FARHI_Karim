import { useFetch } from "../../utils/hooks/Fetch";
import { useParams } from "react-router-dom";

import Nutrients from "../../components/nutrients/Nutrients";
import DailyCharts from "../../components/dailyCharts/DailyCharts";
import AverageSession from "../../components/averageSession/AverageSession";
import Performance from "../../components/performance/Performance";
import Goal from "../../components/goal/Goal";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../Error/Error";

import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";

import "./style.scss";

/**
 * Render the App page
 *
 * @category Pages
 * @param {string} props.type- Type of data recieved
 * @returns { React.Component } A React component
 */

function App({ type }) {
  const getId = useParams();
  const user = parseInt(getId.userId);

  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = useFetch(
    `${process.env.REACT_APP_HOST}user/${user}`,
    window.location.origin +
      "/SportSee_Farhi_Karim/mocked-data/user-main-data.json",
    user
  );

  const {
    data: weightData,
    isLoading: weightIsLoading,
    error: weightError,
  } = useFetch(
    `${process.env.REACT_APP_HOST}user/${user}/activity`,
    window.location.origin +
      "/SportSee_Farhi_Karim/mocked-data/user-activity.json",
    user
  );

  const {
    data: sessionData,
    isLoading: sessionIsLoading,
    error: sessionError,
  } = useFetch(
    `${process.env.REACT_APP_HOST}user/${user}/average-sessions`,
    window.location.origin +
      "/SportSee_Farhi_Karim/mocked-data/user-average-sessions.json",
    user
  );

  const {
    data: performanceData,
    isLoading: performanceIsLoading,
    error: performanceError,
  } = useFetch(
    `${process.env.REACT_APP_HOST}user/${user}/performance`,
    window.location.origin +
      "/SportSee_Farhi_Karim/mocked-data/user-performance.json",
    user
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
    return <Error />;
  }

  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="wrapper-dashboard">
        <div className="profil">
          {type.length === 0 ? (
            <div className="main-text">
              <h1 className="main-text-title">
                Bonjour {""}
                <span className="main-text-name">
                  {userData.userInfos.firstName}
                </span>
              </h1>
              <p className="main-text-content">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </p>
            </div>
          ) : (
            <div>
              <h2>
                Data issues de /user/{user}/{type}
              </h2>
            </div>
          )}

          {type.includes("nutrient") ? (
            <div>
              {Object.entries(userData.keyData).map(([key, value], index) => (
                <Nutrients key={index} food={key} quantity={value} />
              ))}
            </div>
          ) : (
            <></>
          )}

          <div className="dashboard">
            <div className="dashboard-main">
              {type.length === 0 || type.includes("activity") ? (
                <div className="dashboard-main-dailycharts-container">
                  <div className="dashboard-main-dailycharts">
                    <DailyCharts data={weightData.sessions} />
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="dashboard-main-smallgraph-container">
                {type.length === 0 || type.includes("average-session") ? (
                  <div className="dashboard-main-smallgraph-container-1">
                    <AverageSession data={sessionData.sessions} />
                  </div>
                ) : (
                  <></>
                )}
                {type.length === 0 || type.includes("performance") ? (
                  <div className="dashboard-main-smallgraph-container-2">
                    <Performance data={performanceData.data} />
                  </div>
                ) : (
                  <></>
                )}

                {type.length === 0 || type.includes("goal") ? (
                  <div className="dashboard-main-smallgraph-container-3">
                    <Goal data={userData} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            {type.length === 0 ? (
              <div className="dashboard-cards">
                {Object.entries(userData.keyData).map(([key, value], index) => (
                  <Nutrients key={index} food={key} quantity={value} />
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
