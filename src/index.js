import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import { Flags } from "./components/Flags"
import './index.css';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Flags />
  </BrowserRouter>
)
