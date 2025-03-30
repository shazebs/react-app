import { useState } from "react";

import "../assets/Underground.css";

function Underground() {
  const [sampleCount, setSampleCount] = useState(0);

  const userLoggedIn = "admin";

  const marketplaceUsers = [
    { name: "User-M", id: 1, sex: "M" },
    { name: "User-F", id: 2, sex: "F" },
    { name: "User-TM", id: 3, sex: "TM" },
    { name: "User-TF", id: 4, sex: "TF" },
  ];

  const listMarketplaceUsers = marketplaceUsers.map((user) => (
    <li key={user.id}>
      <span
        className="user-item"
        onClick={() => handleUserNameClick(user.name)}
      >
        {user.name}
      </span>
    </li>
  ));

  function login() {
    alert("You clicked login!");
  }

  function signup() {
    alert("You clicked signup!");
  }

  return (
    <>
      <h2
        style={{
          color: "dodgerblue",
          fontWeight: "100",
        }}
      >
        Welcome to Beaumont's <i>underground dating marketplace</i>!
      </h2>

      {/* Marketplace Users <b>{sampleCount}</b>:<ul>{listMarketplaceUsers}</ul> */}

      <button onClick={login}>Login</button>
      <button onClick={signup}>Signup</button>

      <h4>Cities:</h4>
      <ul>
        <li>Beaumont</li>
        <li>Banning</li>
        <li>Calimesa</li>
        <li>Cabazon</li>
        <li>Hemet</li>
        <li>Yucaipa</li>
        <li>Redlands</li>
        <li>Moreno Valley</li>
        <li>Riverside</li>
        <li>San Bernardino</li>
        <li>Fontana</li>
      </ul>

      <h4>Most Liked:</h4>
      <ul>
        <li>...</li>
      </ul>

      <h4>Community Posts</h4>
      <ul>
        <li>...</li>
      </ul>  

      <h4>Age Groups:</h4>
      <ul>
        <li>18-65+</li>
        <li>18-24</li>
        <li>25-34</li>
        <li>35-44</li>
        <li>45-54</li>
        <li>55-64</li>
        <li>65+</li>
      </ul>

      

    </>
  );
}

export default Underground;

/**

React Concepts:
- className
- style={{ }}
- onClick={() => sampleFunction(randomVariable)}
- useState()
- JSX 
- Functions
- Props 
- Hooks 
- Routes, Route

 */
