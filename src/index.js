import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchEngine from "./SearchEngine";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode class="Search">
    <h1>Weather App</h1>
    <SearchEngine />
    <br />
    <footer>
      This project was coded by
      <a
        href="https://github.com/TeeYuhh14"
        class="myProfileLink"
        target="_blank"
        rel="noreferrer"
      >
        <strong> Tia Demas </strong>
      </a>
      and is on
      <a
        href="https://github.com/TeeYuhh14?tab=repositories"
        class="myGitHubLink"
        target="_blank"
        rel="noreferrer"
      >
        <strong> GitHub </strong>
      </a>
      and hosted on
      <a
        href="https://fascinating-kitten-a8f8ca.netlify.app/"
        class="myNetlifyLink"
        target="_blank"
        rel="noreferrer"
      >
        <strong> Netlify </strong>
      </a>
    </footer>
  </StrictMode>
);
