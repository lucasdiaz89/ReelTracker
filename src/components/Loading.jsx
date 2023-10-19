
import Cards from "./Cards";

function Loading(props) {
  return (
    <>
     <li
      key={`loading-${props.index}`}
      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 p-4">
      <Cards
        imageUrl=""
        title=""
        rating=""
        reviews=""
        idSelection=""
        loadingApi
      />

      </li>
    </>
  );
}

export default Loading;