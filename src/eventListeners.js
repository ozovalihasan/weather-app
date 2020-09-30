// import storage from "./localStorageOperations";
import getInformation from "./weatherAPI";
import pageStructure from "./pageStructure";
import storage from "./localStorageOperations";

const eventListeners = () => {
  const unit = document.getElementById(storage.getUnit());
  unit.checked = true;

  const searchForm = () => document.getElementById("search");
  searchForm().addEventListener("submit", (event) => {
    event.preventDefault();
    pageStructure.showLoader();

    const city = searchForm().elements.namedItem("city").value;
    const unit = searchForm().elements.namedItem("unit").value;
    storage.setUnit(unit);
    if (city === "") {
      alert("Please fill in the blank used for city");
    } else {
      (async () => {
        try {
          const result = await getInformation(city, unit);
          if (result.cod === "404") {
            alert("City cannot be found ");
          } else {
            pageStructure.showResults(result);
          }
        } catch (error) {
          alert(error);
        }
      })();
    }
    pageStructure.removeLoader();
  });
};

export default eventListeners;
