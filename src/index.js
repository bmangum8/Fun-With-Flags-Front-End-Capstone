import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import { Flags } from "./components/Flags"
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
//import ReactDOM from 'react-dom';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Flags />
  </BrowserRouter>
)
