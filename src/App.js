import './App.css';
import UserComponents from './Components/UserComponents';
import { Route, Switch } from 'react-router-dom';
import AddUser from './Components/AddUser';


import { NoPage } from './Components/NoPage';
import { UserDetail } from './Components/UserDetail';
import { EditDetail } from './Components/EditDetail';



function App() {
 
  return (
    <div className="App">

      <Switch>
        
        <Route exact path="/Dashboard">
          <UserComponents
            />
        </Route>
        <Route path="/adduser">

          <AddUser
            />


        </Route>
        <Route path="/edit/:id">
          <EditDetail
          />
      



        </Route>

        <Route path="/:id">
          <UserDetail
             />
           

        </Route>




        <Route path="**">
          <NoPage />

        </Route>
      </Switch>







    </div>
  );
}

export default App;



