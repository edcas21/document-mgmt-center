import React, { useEffect, useState } from "react";
import $ from "jquery";

import { Header } from "./components/Header.component";
import { Search } from "./components/Search.component";
import { ViewArea } from "./components/ViewArea.component";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    $.getJSON("https://jsonplaceholder.typicode.com/posts?id=6", (data) => {
      setData(data);
    });
  });

  return (
    <div className="App">
      <Header />
      <section>
        <div className="container-fluid">
          <div className="row vh-100">
            {/* Search bar */}
            <Search />
            {/* Image viewing area */}
            <ViewArea />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
