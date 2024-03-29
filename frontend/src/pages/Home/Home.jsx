import LoginButtons from "../../components/loginButtons/LoginButtons";

import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";

/**
 * Render the home page
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function Home() {
  return (
    <>
      <Header />
      <Aside />

      <LoginButtons />
    </>
  );
}

export default Home;
