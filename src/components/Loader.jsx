import { FadeLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "0a5d84",
};

function Loader(props) {

  return (
    <>
      <FadeLoader
        height={8}
        margin={0}
        radius={10}
        width={8}
        color= { false ? "#0a5d84" : "#4e0970"}
        loading={props.loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

export default Loader;