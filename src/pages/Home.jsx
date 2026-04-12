import { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default HomePage;
