import { Provider } from "react-redux";
import GlobalStyles from "globalStyles";
import Suggestions from "pages/suggestions";
import { store } from "reduxState/store";

function App() {
  console.log("store", store);
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Suggestions />
    </Provider>
  );
}

export default App;
