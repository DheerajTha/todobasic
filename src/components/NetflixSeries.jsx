import datajson from "../api/data.json";
import Netflixlist from "./Netflixlist";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {datajson.map((cuElem, index) => (
        <Netflixlist  key={index} data={cuElem} />
      ))}
    </ul>
  );
};
export default NetflixSeries;
