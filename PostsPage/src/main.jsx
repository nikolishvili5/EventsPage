import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import RootLayout from './routes/RootLayout.jsx';
import HomePage from './routes/HomePage';
import EventsRootLayout from './routes/EventsRoot.jsx';
import EventDetailPage, {loader as detailLoader, action as deleteEventAction} from './routes/EventDetailPage.jsx';
import { action as manipulateEventAction } from './components/EventForm.jsx';
import EventsPage,{loader as postsLoader} from './routes/PostsPage';
import EditEvent from './routes/EditEvent.jsx';
import NewEvent from './routes/NewEvent.jsx';




const router=createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>, 
    children: [
      { index:true, element: <HomePage /> },
      {
        path:'events', 
        element: <EventsRootLayout/>, 
        children: [
          { 
            index:true, 
            element: <EventsPage/>, 
            loader:postsLoader
          },
          {
            path: ':eventId', 
            id: 'event-detail',
            loader:detailLoader, 
            children: [
            {
              index: true,
              element: <EventDetailPage/>, 
              action: deleteEventAction,
            },
            {
              path: 'edit',
              element: <EditEvent/>,
              action: manipulateEventAction,
            }
          ]},
          {
            path: 'new', 
            element: <NewEvent/>, 
            action: manipulateEventAction
          }
        ]
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
