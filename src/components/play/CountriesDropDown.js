//contain drop down menu of countries, will contain submit button?

import { useEffect, useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
//import { useNavigate } from "react-router-dom"
//import countries.css

export const CountriesDropDown = () => {
    const [countries, setCountries] = useState([])
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/countries?name`)
            .then(response => response.json())
            .then((countriesArray) => {
                setCountries(countriesArray)
            })
        },
    []
    )


    const handleChange = (event) => {
        setCountries(event.target.value);
      }
    



      

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;

    return (
    <div>
      <label>
        What country is represented by the flag?
        <select value={countries} onChange={handleChange}>
          {countries.map((country) => (
            <option value={country.id}>{country.name}</option>
          ))}
        </select>
      </label>
    </div>
      )
    }
    

    /*
    const Dropdown = ({ label, value, options, onChange }) => {
      return (
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      );
    };
    return (
    <section className="dropdown">
      <form className="countriesdropdown">
        <label className="label">Country</label>
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

/*
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
*/
