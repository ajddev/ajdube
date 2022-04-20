import ReactVivus from "react-vivus";
import svg from "../../assets/images/ajd.svg";

const Loader = () => {
  function done() {
    const el = document.getElementById("ajd");
    el.classList.add("finished");
    setTimeout(() => {
      el.style.animation = "fadeOut 2s";
    }, 1000);
  }
  return (
    <ReactVivus
      id="ajd"
      option={{
        file: svg,
        type: "sync",
        animTimingFunction: "EASE",
        duration: 100,
      }}
      style={{ height: "300px", width: "250px" }}
      callback={done}
    />
  );
};

export default Loader;
