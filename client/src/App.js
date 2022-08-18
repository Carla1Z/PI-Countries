import "./App.css";
import Home from "./vistas/Home";
// import Home from "./componentes/HomeSelene";
import LadingPage from "./vistas/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormAct from "./vistas/FormAct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LadingPage} />
          <Route path="/home" component={Home} />
          <Route path="/activity" component={FormAct} />
        </Switch>
        {/* <Home /> */}
      </div>
    </BrowserRouter>
  );
}

//selene
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={LadingPage} />
//           <Route path= '/home' component={Home} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
