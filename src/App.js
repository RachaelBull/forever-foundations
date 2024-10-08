import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUp";
import SignInForm from "./pages/auth/SignIn";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import Username from "./pages/profiles/Username";
import PasswordForm from "./pages/profiles/PasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PageNotFound from "./components/PageNotFound";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
        <div className={styles.App}>
          <NavBar />
            <Switch>
            <Route exact path="/" render={() => (<PostsPage message="No results found. Please search using keywords.." />)}/>
              <Route exact path="/feed" render={() => (<PostsPage message="No results found. Adjust the search keyword or follow a user." filter={`owner__followed__owner__profile=${profile_id}&`}/>)}/>
              <Route exact path="/loved" render={() => (<PostsPage message="No results found. Adjust the search keyword or love a post." filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_on&`}/>)}/>
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <Username />}/>
              <Route exact path="/profiles/:id/edit/password" render={() => <PasswordForm />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/gettingmarriedinitaly" render={() => <h1>Getting Married In Italy</h1>} />
              <Route exact path="/gettingmarriedintheuk" render={() => <h1>Getting Married In The UK</h1>} />
              <Route exact path="/gettingmarriedinspain" render={() => <h1>Getting Married In Spain</h1>} />
              <Route exact path="/gettingmarriedingreece" render={() => <h1>Getting Married In Greece</h1>} />
              <Route exact path="/choosingyourlocation" render={() => <h1>Choosing Your Location</h1>} />
              <Route exact path="/budgetfriendlytips" render={() => <h1>Budget Friendly Tips</h1>} />
              <Route exact render={() => <PageNotFound />}/>
            </Switch>
        </div>
  );
}

export default App;