/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Comming Soon</h1>
      <header className="App-header">
        <img src="image1.webp" className="App-logo" alt="logo" />
        <br></br>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/



//import FunctionalCom from "./Component/FunctionalCom";

/*import React, { useState } from 'react';

function MyForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    
    rollNumber: '',
    name: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    gender: '',
    hobbies: [],
    country: '',
  });

  // Update form data when input values change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send it to a server)
    console.log('Form Data:', formData);
    // You can also perform additional actions here, such as making an API call
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'yellow', // Set your desired background color
    }}>
      <form onSubmit={handleSubmit} style={{
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        borderRadius: '8px',
        border:'5px dotted',
        background: 'pink', // Set your desired form background color
      }}>
      <h1><center><u><i>Resister Form</i></u></center></h1>
        <label>
          Roll Number:
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required/>
        </label>
        <div>
        </div>

        <br />
        

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required/>
        </label>
        <div>
        </div>

        <br />

        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required/>
        </label>
        <div>
        </div>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
        </label>
        <div>
        </div>

        <br/>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required/>
        </label>
        <div>
        </div>

        <br />

        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <div>
        </div>

        <br />

        <label>
          Hobbies:
          <div>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="reading"
                checked={formData.hobbies.includes('reading')}
                onChange={handleChange}
              /> Reading
            </label>
            <div>
        </div>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="sports"
                checked={formData.hobbies.includes('sports')}
                onChange={handleChange}
              /> Sports
            </label>
            <div>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="painting"
                checked={formData.hobbies.includes('painting')}
                onChange={handleChange}
              /> Painting
            </label>
            </div>
          </div>
        </label>
        <div>
        </div>

        <br />

        <label>
          Select your country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required>
            <option value="">Select Country</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="india">India</option>
          </select>
        </label>
        <div>
        </div>

        <br />

        <button type="submit">Submit</button>
        <div>
        <button type="Reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;*/

/*import ArrowFunction from "./Component/ArrowFunction.js";
import FunctionalCom from "./Component/FunctionalCom.js";
import ClassComponent from "./Component/ClassComponent.js";
export default function App() {
  return (
    <div>
      <FunctionalCom/>
      <ClassComponent/>
      <ArrowFunction/>
    </div>
  )
}*/


/*import PropsFunctional from "./Day4/PropsFunctional";
import PropsClass from "./Day4/PropsClass";
import PropsFunctionalEx1 from "./Day4/PropsFunctionalEx1";
import ArrowProps from "./Day4/ArrowProps";
import StateClassCom from "./Day4/StateClassCom";
import StateFunction from "./Day4/StateFunction";
import StateHoldObject from "./Day4/StateHoldObject";
import DynamicRendering from "./Day4/DynamicRendering";
import ParentChildCommunication from "./Day4/ParentChildCommunication";
import TwoWayBinding from "./Day4/TwoWayBinding";
import DefaultProps from "./Day4/DefaultProps";
import Login from "./Project/Login";
export default function App()
{
  return(
    <div>
    <PropsFunctional name="Tharun"></PropsFunctional>
    <PropsClass college="SKCT"></PropsClass>
    <PropsFunctionalEx1 college="SKCT" place="Coimbatore"></PropsFunctionalEx1>
    <ArrowProps place="Paris"></ArrowProps>
    <StateClassCom/>
    <StateFunction/>
    <StateHoldObject/>
    <ParentChildCommunication/>
    <DynamicRendering/>
    <TwoWayBinding/>
    <DefaultProps name="SKCT"/>
    <Login/>
    </div>
  )
}*/

/*import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Day5/SignUp";
import Login from "./Day5/Login";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}*/

/*import React from 'react'
import List from './Day6/List'
import DisplayName from './Day6/Demo'
import ListObject from './Day6/ListObject'
import Materialui from './Day6/Materialui'

export default function App() {
  return (
    <div>
      <List/>
      <DisplayName/>
      <ListObject/>
      <Materialui/>
    </div>
  )
}*/

/*import React from 'react'
import ErrorBoundary from './Day8/ErrorBoundary'
import Car from './Day8/Car'
import TryCatch from './Day8/TryCatch'

export default function App() {
  return (
    <div>
      <ErrorBoundary>
      <Car carName="Thar"></Car>
      </ErrorBoundary>
      <ErrorBoundary>
      <Car carName="JCB"></Car>
      </ErrorBoundary>
      <TryCatch fruit="Onion"/>
    </div>
  )
}*/

import React from 'react'
import ComponentLifeCycle from './Day8/ComponentLifeCycle'
import LifecycleFunctional from './Day8/LifeCycleFunctional'

export default function App() {
  return (
    <div>
      <ComponentLifeCycle/>
      <LifecycleFunctional/>
    </div>
  )
}



