import './App.css';
import Home from './features/Home/Home';
import Projects from './features/Projects/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { auth, provider, signInWithPopup, signOut } from "./config/firebase";
// import Loader from "./components/Loader"; 

// const OWNER_EMAIL = "ibrahimadel.dev@gmail.com";

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   console.log(user);

//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged((user) => {
//       setUser(user);
//       // setLoading(false);
//       const delay = setTimeout(() => {
//         setLoading(false);
//       }, 700);

//       return () => clearTimeout(delay);
//     });
//     return () => unsub();
//   }, []);

//   const handleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (err) {
//       console.error("Login error", err);
//     }
//   };

//   const handleLogout = () => {
//     signOut(auth);
//   };

//   const isOwner = user?.email === OWNER_EMAIL;

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <h1>Welcome to my Portfolio</h1>
//               {!user ? (
//                 <button onClick={handleLogin}>Login with Google</button>
//               ) : (
//                 <>
//                   <p>Logged in as {user.email}</p>
//                   <button onClick={handleLogout}>Logout</button>
//                   {isOwner && <a href="/dashboard">Go to Dashboard</a>}
//                 </>
//               )}
//             </div>
//           }
//         />

//         <Route
//           path="/dashboard"
//           element={
//             true ? (
//               // <div>Loading...</div>
//               <Loader loading={loading}/>
//             ) : (
//               isOwner ? (
//                 <div>
//                   <h2>Dashboard (Private)</h2>
//                   <p>أهلاً بك يا مدير 👑</p>
//                   <button onClick={handleLogout}>Logout</button>
//                   <Loader loading={true}/>
//                 </div>
//               ) : (
//                 <Navigate to="/" replace />
//               )
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
