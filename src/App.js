import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUp";
import SignInForm from "./pages/auth/SignIn";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";


function App() {

  return (
        <div className={styles.App}>
          <NavBar />
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/gettingmarriedinitaly" render={() => <h1>Getting Married In Italy</h1>} />
              <Route exact path="/gettingmarriedintheuk" render={() => <h1>Getting Married In The UK</h1>} />
              <Route exact path="/gettingmarriedinspain" render={() => <h1>Getting Married In Spain</h1>} />
              <Route exact path="/gettingmarriedingreece" render={() => <h1>Getting Married In Greece</h1>} />
              <Route exact path="/choosingyourlocation" render={() => <h1>Choosing Your Location</h1>} />
              <Route exact path="/budgetfriendlytips" render={() => <h1>Budget Friendly Tips</h1>} />
              <Route render={() => <p>The Page You Are Looking For Has Not Been Found.</p>} />
            </Switch>
        </div>
  );
}

export default App;