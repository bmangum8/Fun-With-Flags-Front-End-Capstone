Capstone Components:
1. FlagsGenerator.js- will randomly show the flag of a country

- need to import { useEffect, useState } from "react"
- import use Navigate from "react-router-dom"
- import flags.css

export const FlagGenerator function
const [flags, setFlags] = useState([])
useEffect to observe inital state, fetch state from API
-filter country names and flags from json server---see notes in notebook
setFlags(FlagsArray)
(-Stretch goals: capitals, languages, currencies, subregions)



return a random country flag by randomly selecting an index from an array. index cannot be higher than 230 or lower than 0
https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/




2. CountriesDropDownList.js - will contain drop down menu of countries, will contain submit button?
 -need to import { useEffect, useState } from "react"
- import use Navigate from "react-router-dom"
- import countries.css

export const CountriesList = () => {
    const [countries, setCountries] = useState([])
    useEffect (
        fetch (`api info filtered by name`)
        setCountries to countriesArray
    ),
    []


    return (
    <section className="dropdown">
      <form className="countriesdropdown">
        <label className="label">Category</label>
        <DropDownList countriesArray={countries} onChange={event => setCountries(event.value)} />
      </form>

      <section className="countries-listgroup">
        <ul>
          {countries.map(country => {
            return (
              <li key={country.id} className="listgroup-country">
                {country.name}
              </li>
            );
        })}
        </ul>
      </section>
    </section>
  );
};
//I got this from the example below


https://www.telerik.com/blogs/quick-guide-dropdown-menus-react

export const RecipeDropDownList = () => {  
  // Store currently selected category  
  const [category, setCategory] = useState("");  
  
  // Memoized results. Will re-evaluate any time selected  
  // category changes  
  const filteredData = useMemo(() => {  
    if (!category || category === "all") return data;  
  
    return data.filter(item => item.type === category);  
}, [category]);  

return (
    <section className="k-my-8">
      <form className="k-form k-mb-4">
        <label className="k-label k-mb-3">Category</label>
        <DropDownList data={categories} onChange={e => setCategory(e.value)} />
      </form>

      <section className="k-listgroup">
        <ul>
          {filteredData.map(item => {
            return (
              <li key={item.id} className="k-listgroup-item">
                {item.label}
              </li>
            );
        })}
        </ul>
      </section>
    </section>
  );
};






3. Component to manage app state??



4. NavBar.js
    - import { Link, useNavigate } from "react-router-dom"
    - import "./NavBar.css"
    -export const NavBar = () => {
        const navigate = useNavigate()

        return (
            <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link" to="/Play">Play</Link>
            </li>
            ---continue this for each item in the nav bar: Home, Play, Flag Facts, (Stretch Goal: My Scores)

        </ul>
        )
    }
    --look at honey raes NavBar.js to get the logout button that needs to be in the return also



5. ApplicationViews.js- holds routes
    - <Outlet /> shows same message at top of each page--Do the name 
    - import { Outlet, Route, Routes } from "react-router-dom"
    - import all the components we made that need routes: Home, Play, Flag Facts, and probably other things
    - export const ApplicationViews = () => {
        const localFlagUser = localStorage.getItem("flag_user")
        //this comes from the log in code. use honeyraes as an example
        //It is supposed to only show the application if the user has signed in??
        const flagUserObject = JSON.parse(localFlagUser)

        return (
            <Routes>
                <Route path="/" element={
                    <>
                        <h1 className="title--main">Fun With Flags</h1>
                        <div>A Vexilloology Quiz/App</div>

                        <Outlet />
                    </>
                }>
                    <Route path="play" element={ <Play /> } />
                    <Route path="flagFacts" element={ <FlagFacts /> } />
                    <Routh path="flagFacts/create" element={ FlagFactsForm />} />
                    ---continue for other components
                </Route>
            </Routes>
        )
    }




6. FlagFactsForm.js -- component that creates from for user to fill out, contains submit button
const factsArray = []

export const FlagFactsForm 


//add default properties to initial state object
const [fact, update] = useState({
    description: "",
    needMoreInfo: false
})

//send the new object to the facts array?? (would be API post request)
handleSaveButtonClick = (event) => {
    event.preventDefault()   //do I need this? It is from honey raes

    //create object 
    const factToSave = {
        userId: flagUserObject.id,
        countryId: -----
        description: fact.description,
        needMoreInfo: fact.needMoreInfo
    }

factsArray.push(factToSave)

return (
 <form className="factForm">
            <h2 className="factForm__title">New Flag Fact</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type fact here"
                        value={fact.description}
                        onChange={
                            (event) => {
                                //makes a copy of the fact using spread operator
                                const copy = {...fact}
                                //sets the description property of the copy to whatever is entered in the description box. which is the value of the target event
                                copy.description = event.target.value
                               // update sets the value of fact to the value of copy
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Do I want to look up more information about this flag?:</label>
                    <input type="checkbox"
                        value={fact.needMoreInfo}
                        onChange={
                            (event) => {
                                const copy = {...fact}
                                //cant use .value with a check box. have to use .checked
                                // is a boolean value of true or false
                                copy.needMoreInfo = event.target.checked
                                //update sets the value of fact to the value of copy
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Flag Fact
            </button>
        </form>
    )
}
)

}



7. FlagFacts.js --shows list of facts user has created
- import factsArray from FlagFactsForm.js
- import facts css
//need to create function that will list all of the fact objects from the users factsArray
- export const FlagFacts = () => {
    for (const fact of factsArray) {
        return fact
    }
}



8. Fact.js holds delete button


9. database.json -- holds Flag Facts objects
flagFacts: [
    {
        id: ,
        countryId: ,
        description: ,
        userId: 
    }
]


10. Results.js --shows correct or incorrect, shows name of country and the flag
*will need an array in the database named Results
*objects will contain id, userId, countryId, correct? boolean

-will need to post result of submit button to database
-post fetch request
-so need onClick in countriesDropDown.js
-need to pass onClick result info from countriesDropDown as a prop to Results.
-so Results will be a child component of countriesDropDown
- route to results page

-On results page: given user clicks on submit button
-if userChoice === country.id then message: yay correct
else message sad face not correct 

-stretch goal: add fact about this flag button



---Thoughts about Play and Results:
a. when the user clicks submit: 
        -Do I want a message to pop up and say correct or incorrect?-- if multiple tries
        -Or do I want them to be rerouted to a new page that says correct or incorrect?
        -I do want them to see the flag and the country name on the page they are rerouted to
        -Will need a play again button that reroutes them to play page

b. Do I want the user results saved to the api database? Currently I have the results sent via post fetch request
        -I think I do not want to save results
        -I also do not want to do points as a stretch goal anymore
        (bc i think to do points, I would need the results to be saved)

c. Questions:
        (FlagGenerator, CountriesDropDown, and Results are child components of PlayContainer)
        (Results is a child component of PlayContainer bc it needs the state of FlagGenerator and CountriesDropDown)
        - If Results is a child component of PlayContainer, does it have to be envoked within PlayContainer?
        - I need it to be envoked later, not when PlayContainer is envoked

11. 