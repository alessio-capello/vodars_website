import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TypeIt from "typeit-react";
import GlitchClip from "react-glitch-effect/core/GlitchClip";

import StringManager from "../../strings/StringManager";
import "./glitchy.css";
export default function Glitchy({ setGlitching }) {
  const { language } = useParams();
  const [line, setLine] = useState(1);
  const [lines, setLines] = useState([StringManager("glitchy", language)["0"]]);
  const [instance, setInstance] = useState(null);
  const [compilerInstance, setCompilerInstance] = useState(null);
  const [internalGlitching, setInternalGlitching] = useState(true);

  const incrementLines = () => {
    if (line >= 5) {
      if (instance !== null) instance.destroy();
      const comp = document.getElementById("compiler");
      comp.style.visibility = "visible";
      const glitchy = document.getElementById("glitchy");
      glitchy.style.visibility = "hidden";
      compilerInstance.unfreeze();
      //setGlitching(false);
      setInternalGlitching(false);
      return;
    }
    if (instance !== null) instance.destroy();
    setLines(lines.concat(StringManager("glitchy", language)[line.toString()]));

    setLine((prevLine) => prevLine + 1);
  };
  const btnText =
    line === 5
      ? StringManager("glitchy", language)["compile"]
      : StringManager("glitchy", language)["next"];
  return (
    <div className="fullpage">
      <GlitchClip duration={5} disabled={!internalGlitching}>
        <div className="glitchy-back">
          <GlitchyCode />
        </div>
      </GlitchClip>
      <div className="glitchy" id="glitchy">
        <div className="glitchy-content">
          <div className="glitchy-logo">{line}</div>
          <div>
            {React.Children.toArray(
              lines.map((l, i) => {
                return (
                  <div className="glitchy-text">
                    <TypeIt
                      getAfterInit={(instance) => {
                        setInstance(instance);
                        return instance;
                      }}
                      options={{
                        speed: 5,
                        waitUntilVisible: true,
                      }}
                    >
                      {l}
                    </TypeIt>
                    {i !== 5 && <br />}
                  </div>
                );
              })
            )}

            {line < 6 && <button onClick={incrementLines}>{btnText}</button>}
          </div>
        </div>
      </div>

      <div
        className="compiler-popup"
        id="compiler"
        style={{ visibility: "hidden" }}
      >
        <div className="compiler-text">
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type(StringManager("glitchy", language)["compilerMessage"])
                .exec(() => {
                  instance.destroy();
                  setGlitching(false);
                });
              setCompilerInstance(instance);
              instance.freeze();

              return instance;
            }}
            options={{
              speed: 2,
              waitUntilVisible: true,
            }}
          ></TypeIt>
        </div>
      </div>
    </div>
  );
}

const GlitchyCode = () => {
  return (
    <React.Fragment>
      <p className="code">
        <span className="code-grey">#define</span>
        <span className="code-black">&nbsp;</span>
        <span className="code-purple">HOME</span>
        <span className="code-black">&nbsp;1</span>
      </p>
      <p className="code">
        <span className="code-grey">#define</span>
        <span className="code-black">&nbsp;</span>
        <span className="code-purple">ABOUT</span>
        <span className="code-black">&nbsp;2</span>
      </p>
      <p className="code">
        <span className="code-grey">#define</span>
        <span className="code-black">&nbsp;</span>
        <span className="code-purple">INFO</span>
        <span className="code-black">&nbsp;3</span>
      </p>
      <p className="code">
        <span className="code-blue">void</span>
        <span className="code-black">&nbsp;main (</span>
        <span className="code-blue">void</span>
        <span className="code-black">{`) {`}</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">int</span>
        <span className="code-black">&nbsp;choice;</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; printf(</span>
        <span className="code-red">
          &quot;Enter your choice [1:home 2:about 3:info]&quot;
        </span>
        <span className="code-black">);</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; scanf(</span>
        <span className="code-red">&quot;%d&quot;</span>
        <span className="code-black">, choice);</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">switch</span>
        <span className="code-black">&nbsp;{`(choice) {`}</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">case</span>
        <span className="code-black">&nbsp;</span>
        <span className="code-purple">HOME</span>
        <span className="code-black">:</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp; printf(</span>
        <span className="code-red">&quot;home&quot;</span>
        <span className="code-black">);</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">break</span>
        <span className="code-black">;</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">case</span>
        <span className="code-black">&nbsp;</span>
        <span className="code-purple">ABOUT</span>
        <span className="code-black">:</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp; printf(</span>
        <span className="code-red">&quot;about&quot;</span>
        <span className="code-black">);</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">break</span>
        <span className="code-black">;</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">case</span>
        <span className="code-black">&nbsp;</span>
        <span className="code-purple">INFO</span>
        <span className="code-black">:</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp; printf(</span>
        <span className="code-red">&quot;home&quot;</span>
        <span className="code-black">);</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">break</span>
        <span className="code-black">;</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">default</span>
        <span className="code-black">:</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp; printf(</span>
        <span className="code-red">&quot;default&quot;</span>
        <span className="code-black">);</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">break</span>
        <span className="code-black">;</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp; {`}`}</span>
      </p>
      <p className="code">
        <span className="code-black">&nbsp; &nbsp;&nbsp;</span>
        <span className="code-blue">return</span>
        <span className="code-black">;</span>
      </p>
      <p className="code-ending">
        <span>{`}`}</span>
      </p>
    </React.Fragment>
  );
};
