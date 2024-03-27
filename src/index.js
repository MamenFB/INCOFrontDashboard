<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
//import App from './App.js';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
=======
import context, { datepickerContext } from "./context/appContext";
import store from "./context/store";
import setAppDefaults from "./config/appDefaults";
import renderViews from "./config/renderViews";

/*!*************************************!*\
// (CSS) 
/*!*************************************!*/

// <html>
import "./styles/root.css";
// </html>

// <header>
import "./styles/header.css";
// </header>

// <main>
import "./styles/containers.css";
import "./styles/yearview.css";
import "./styles/monthview.css";
import "./styles/weekview.css";
import "./styles/dayview.css";
import "./styles/listview.css";
import "./styles/sidebar.css";
import "./styles/sbdatepicker.css";
// </main>

// <aside>
import "./styles/aside/datepicker.css";
import "./styles/aside/toast.css";
import "./styles/aside/goto.css";
import "./styles/aside/toggleForm.css";
import "./styles/aside/sidebarSubMenu.css";
import "./styles/aside/changeViewModule.css";
import "./styles/aside/editCategoryForm.css";
import "./styles/aside/form.css";
import "./styles/aside/timepicker.css";
import "./styles/aside/deleteCategoryPopup.css";
import "./styles/aside/entryOptions.css";
import "./styles/aside/info.css";
import "./styles/aside/shortcuts.css";
// </aside>

/*!*************************************!*/
setAppDefaults(context, store);
renderViews(context, datepickerContext, store);
>>>>>>> 52aabad7a898e41e5a70c366001b19802ec61226
