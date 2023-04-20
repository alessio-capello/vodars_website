import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TypeIt from "typeit-react";
import StringManager from "../../strings/StringManager";
import "./homepage.css";

const Homepage = () => {
  const [compiling, setCompiling] = useState(false);
  const { language } = useParams();
  return (
    <div className="fullpage">
      <div className="mainpage">
        <div className="main-title">
          {StringManager("homepage", language).title}
        </div>

        <div className="main-content">
          <TypeIt
            options={{
              speed: 10,
              waitUntilVisible: true,
              afterComplete: function (instance) {
                instance.destroy();
              },
            }}
          >
            {StringManager("homepage", language).clickToRun}
          </TypeIt>
          <br />
          <button
            onClick={() => {
              setCompiling(true);
            }}
          >
            Compile
          </button>
          <br />
        </div>
        {compiling && (
          <TypeIt
            options={{ speed: 8 }}
            getBeforeInit={(instance) => {
              instance
                .type(StringManager("homepage", language).compilerMessage)
                .pause(750)
                .delete(0)
                .pause(500);

              // Remember to return it!
              return instance;
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
