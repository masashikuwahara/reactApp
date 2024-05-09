import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickBiutton = () => alert();
  const contentStyleB = {
    color: "green",
    fontSize: "18px",
    margin: 100
  };
    return(
      <>
        <h1 style={{ color: "#7cc7e8" }}>こんにちは!</h1>
        <ColorfulMessage color="blue" message="お元気ですか？" />
        <p style={contentStyleB}>元気です</p>
        <button onClick={onClickBiutton}>ボタン</button>
      </>
    );
  };
