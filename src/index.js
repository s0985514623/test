import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListRow from './components/ListRow';
import PostSPA from './pages/PostContent';
import Store from './pages/Store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const getPosts = [
  {id:'1',src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title:'Europe Street beat',description:'www.instagram.com'},
  {id:'2',src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title:'Europe Street beat 2',description:'www.instagram.com'},
  {id:'3',src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title:'Europe Street beat 3',description:'www.instagram.com'},
  {id:'4',src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title:'Europe Street beat 4',description:'www.instagram.com'},
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ListRow />,
      },
      {
        path: "/post",
        element: <PostSPA />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
