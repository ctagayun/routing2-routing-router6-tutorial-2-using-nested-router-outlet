import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      <Navigation />

       {/* Next, we need to map the routes to an actual rendering by using 
       React Router's Route component: 
       
      */}
      
      {/* Note "path" attribute of Route component is directly match
       "to" attribute of Link component*/}
      <Routes> 
         {/* it is possible to nest Route Component */}
         <Route element={<Layout />}>
            <Route path="home" element={<Home /> } />
            <Route path="users" element={ <Users /> } />
            <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      {/* Note "to" attribute of Link compnent is directly match
       "path" attribute of Route component

        The essence of React Router is setting up Link components and matching them 
      with Route components. 

         Links have a many to one relationship to Routes, so that there can be multiple 
      Links in your application linking to the same Route.

       */}
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <main style={{ padding: '1rem 0' }}>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};


const About = () => {
  return (
    <>
    <main>
      <h2>Who are we?</h2>
      <p>
        That feels like an existential question, don't you
        think?
      </p>
    </main>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
  </>

  );
};

const Users = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users</h2>
    </main>
  );
};

//First let's create styling component
//Now instead of using React's children in the Layout component, use React Router's 
//Outlet component as equivalent:

// const Layout = ({ children }) => {
//   return <main style={{ padding: '1rem 0' }}>{children}</main>;
// }
const Layout = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Outlet />
    </main>
  );
};
export default App;
