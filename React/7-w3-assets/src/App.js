import './App.css';
import bebop from './assets/img/bebop.png'
import ReactPlayer from "react-player"
function App() {
  const randomImageUrl="https://cdn.donmai.us/sample/fd/31/__original_drawn_by_hhl_ggul80hg58__sample-fd3195c19e6350dcc9c897a45c842e1f.jpg"
  
  const vidUrl="https://youtu.be/j2MF9dOXxcM"
  return (
    <div>
        <h1>Task: Adding three images with some styling</h1>
      <div>
        <img
        height={200}
        src={bebop}
        alt="Bebop"
        />
        <img
        height={200}
        src={require("./assets/img/cute.png")}
        alt="cute"
        />
      <img
        src={randomImageUrl}
        height={200}
      />
      <h1>React Player example</h1>
      </div>
        <div className="vid">
          <ReactPlayer
            width="60%"
            height="200px"
            url={vidUrl}
            playing={false}
            volume={0.5}
            />
        </div>
    </div>
  );
}

export default App;
