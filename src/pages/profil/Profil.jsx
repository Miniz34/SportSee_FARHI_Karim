import Header from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/Fetch";

function Profil() {
  return (
    <div>
      <Header />
      <Aside />
      <div>
        {" "}
        HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
        HELLO HELLO HELLO HELLO HELLO HELLO HELLO
      </div>
    </div>
  );
}

export default Profil;
