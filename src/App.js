import useRandomNumber from "./hooks/useRandomNumber";
import useFetch from "./hooks/useFetch";

import PhotoWrap from "./components/PhotoWrap";
import SinglePhoto from "./components/SinglePhoto";

import "./App.css";

function App() {
  const rmNumb = useRandomNumber();
  const { users, loading, error } = useFetch();

  let content;

  if (error) {
    return <p>Error!</p>;
  }

  if (loading) {
    content = <div>loading</div>;
  } else if (!loading && users) {
    content = (
      <PhotoWrap className="flexDiv">
        {rmNumb.map((number, index) => (
          <SinglePhoto key={index} link={`${users[number].picture.large}`} />
        ))}
      </PhotoWrap>
    );
  }

  return <div className="mainDiv">{content}</div>;
}

export default App;
