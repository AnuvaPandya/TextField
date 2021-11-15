import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import DisplayData from "./components/DisplayData";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  const onRefresh = () => {
    try {
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    onRefresh();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div>
      <DisplayData />
    </div>
  );
}

export default App;
