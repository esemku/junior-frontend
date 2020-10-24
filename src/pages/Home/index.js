import React from "react";

import { Footer } from "components/Footer";

import { Intro, RulesAndSuggestions, Task1, Task2, Task3 } from "./sections";

import Slider from './Slider'


export const Home = () => (
  <div>
    <Intro />
    <Task1 />
    <Slider />
    <Task2 />
    <Task3 />
    <RulesAndSuggestions />
    <Footer />
  </div>
);
