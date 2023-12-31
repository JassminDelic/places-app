import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces"

function App() {
  return <Router>
    <MainNavigation />
    <main>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/places/new' element={<NewPlace />} />
        <Route path='/:userId/places' element={<UserPlaces />} />
        <Route path='/*' element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  </Router>
}

export default App;
