import './App.css';
import Bike from './components/Bike';
import AddBike from './components/AddBike';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {loadBike} from "./store";
import { useSelector } from "react-redux";
import {TopPanel} from "./components/TopPanel";
import {BottomPanel} from "./components/BottomPanel";
import {Statistic} from "./components/Statistic";


function App() {
  const dispatch = useDispatch();
  const { bikes } = useSelector((state) => state);
  useEffect(() => {
    dispatch(loadBike());

  }, [dispatch]);



  return (
      <div className="App">
        <TopPanel/>
        <div className="content">
          <div id='bikes'>
            {bikes.map((bike, i) =>
                <Bike key={i}
                      bikes={bike}
                />)}
          </div>

          <AddBike/>
          <Statistic/>
        </div>
        <BottomPanel/>
      </div>
  );
}

export default App;
