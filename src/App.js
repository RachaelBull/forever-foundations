import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUp";
import SignInForm from "./pages/auth/SignIn";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/gettingmarriedinitaly" render={() => <h1>Getting Married In Italy</h1>} />
              <Route exact path="/gettingmarriedintheuk" render={() => <h1>Getting Married In The UK</h1>} />
              <Route exact path="/gettingmarriedinspain" render={() => <h1>Getting Married In Spain</h1>} />
              <Route exact path="/gettingmarriedingreece" render={() => <h1>Getting Married In Greece</h1>} />
              <Route exact path="/choosingyourlocation" render={() => <h1>Choosing Your Location</h1>} />
              <Route exact path="/budgetfriendlytips" render={() => <h1>Budget Friendly Tips</h1>} />
              <Route render={() => <p>The Page You Are Looking For Has Not Been Found.</p>} />
            </Switch>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;