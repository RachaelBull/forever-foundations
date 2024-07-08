import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className={styles.App}>
       <NavBar />
       <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route exact path="/gettingmarriedinitaly" render={() => <h1>Getting Married In Italy</h1>} />
          <Route exact path="/gettingmarriedintheuk" render={() => <h1>Getting Married In The UK</h1>} />
          <Route exact path="/gettingmarriedinspain" render={() => <h1>Getting Married In Spain</h1>} />
          <Route exact path="/gettingmarriedingreece" render={() => <h1>Getting Married In Greece</h1>} />
          <Route exact path="/choosingyourlocation" render={() => <h1>Choosing Your Location</h1>} />
          <Route exact path="/budgetfriendlytips" render={() => <h1>Budget Friendly Tips</h1>} />
          <Route render={() => <p>The Page You Are Looking For Has Not Been Found.</p>} />
        </Switch>
       </Container>
    </div>
  );
}

export default App;