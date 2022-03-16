import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    $.getJSON('https://jsonplaceholder.typicode.com/posts', data => {
      setData(data)
    })
  })

  return (
    <div className="App">
      <h1>We're going to send a request to an api</h1>
      {
        data.map((post, index) => {
          return(
            <h2 key={index}>{post.title}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
