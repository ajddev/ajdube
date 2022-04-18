import "./index.scss";
import ReactVivus from "react-vivus";
import svg from "../../assets/images/ajd.svg";

const ReactVivusSvg = () => {
  return (
    <ReactVivus
      id="ajd"
      option={{
        file: svg,
        type: "sync",
        animTimingFunction: "EASE",
        duration: 100,
        fill: "#555",
        onReady: null,
      }}
      style={{ height: "300px", width: "250px" }}
      callback={() => document.getElementById("ajd").classList.add("finished")}
    />
  );
};

export default ReactVivusSvg;
