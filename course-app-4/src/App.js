import {Routes ,Route} from "react-router-dom"
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import "./App.css"



function App() {
  return (
    <div>
      <PageContainer>
        <Header />
      </PageContainer>
    </div>
  );
}

export default App;
