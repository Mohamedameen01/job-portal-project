import React from "react";
import { useLocation } from "react-router-dom";

import selectionImg from "/assets/images/study-abroad/selected-country-page.jpg";

function CountryDetailsSection() {
  const { state } = useLocation();
  return (
    <div className="grid gap-4">
      <h2 className="text-4xl font-black capitalize">
        The {state.title || "Country"}
      </h2>
      <h4 className="text-2xl font-bold">
        Score 8+ Bands with Certified and experienced e.visa Coach
      </h4>
      <p className="text-xl text-slate-600 leading-7 tracing-wide">
        When it comes to world-class education,{" "}
        <span className="capitalize">{state.title || "the country"}</span>{" "}
        stands as a beacon of excellence, offering a welcoming environment,
        top-tier institutions, and a diverse cultural tapestry. Studying in{" "}
        <span className="capitalize">{state.title || "the country"}</span> isn't
        just about gaining a degree.
      </p>
      <p className="text-xl text-slate-600 leading-7 tracing-wide">
        It's about immersing yourself in an enriching educational experience
        that prepares you for global success. Here's a glimpse into what makes
        studying in{" "}
        <span className="capitalize">{state.title || "the country"}</span> .
      </p>
      <img src={selectionImg} className="w-full h-full object-cover" />
    </div>
  );
}

export default CountryDetailsSection;
