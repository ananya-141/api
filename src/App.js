import React, {useState} from 'react';

const App = () => {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => setData(res));

  return (
    <div className="bg-puple-400">
      <h1 className="text-3xl ">Fetching Data from API</h1>
      {data.map((e) => (
      <div className="p-4 py-9 m-9 w-96 border rounded-xl shadow-xl bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 flex justify-between items-center">
        <div>
          <p className="text-2xl">{e.id}</p>
          <p>{e.name}</p>
          <p>{e.email}</p>
          <p>{e.phone}</p>
          <p>{e.website}</p>
          <p>{e.address.street}</p>
          <p>{e.address.suite}</p>
          <p>{e.address.city}</p>
          <p>{e.address.zipcode}</p>
          <p>{e.address.geo.lat}</p>
          <p>{e.address.geo.lng}</p>
          
        </div>
        <br></br>
        
      </div>
      
    ))}

    </div>
    
  )  
}

export default App; 