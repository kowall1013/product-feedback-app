//External
import { Provider } from "react-redux";
//Components
import Suggestions from "pages/suggestions";
//Redux
import { store } from "reduxState/store";
//Styles
import GlobalStyles from "globalStyles";

function App() {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<Suggestions />
		</Provider>
	);
}

export default App;
