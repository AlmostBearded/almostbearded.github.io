import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Header from '../components/Header';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
// import NotFoundPage from '../components/NotFoundPage';
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

// const App = () => (
//   <BrowserRouter>
//     <div>
//       <Header />
//       <Switch>
//         <Route
//           path="/"
//           component={ExpenseDashboardPage}
//           exact
//         />
//         <Route path="/create" component={AddExpensePage} />
//         <Route path="/edit/:id" component={EditExpensePage} />
//         <Route path="/help" component={HelpPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
