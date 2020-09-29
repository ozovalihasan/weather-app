// import storage from "./localStorageOperations";
import getInformation from "./weatherAPI";
import pageStructure from "./pageStructure";

const eventListeners = () => {
  const searchForm = () => document.getElementById("search");
  searchForm().addEventListener("submit", (event) => {
    event.preventDefault();
    const city = searchForm().elements.namedItem("city").value;
    if (city === "") {
      alert("Please fill in the blank used for city");
    } else {
      (async () => {
        try {
          const result = await getInformation(city);
          if (result.cod === "404") {
            console.log("City cannot be found ");
          } else {
            console.log(result);
            pageStructure.showResults(result);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  });
};

export default eventListeners;
