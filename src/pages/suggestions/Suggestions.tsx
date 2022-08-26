import Header from "components/Header";
import FeedbackList from "./feedbackList";
import NavbarExtension from "./navbarExtension";

function Suggestions(): JSX.Element {
  return (
    <div>
      <Header />
      <NavbarExtension />
      <FeedbackList />
    </div>
  );
}

export default Suggestions;
