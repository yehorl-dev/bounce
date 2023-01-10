import css from "./style.module.css";

import { Game } from "../../game";
import { useState } from "react";
import { config } from "game/modules/service/config";

function App() {
  const [isDebug, setIsDebug] = useState<boolean>(false);

  const changeDebug = (v: boolean) => {
    if (config.physics?.arcade) config.physics.arcade.debug = v;
    setIsDebug(true);
  };

  return (
    <div className={css.root}>
      {!isDebug ? (
        <div className={css.debug}>
          <p>Enable physic debug?</p>

          <div>
            <button
              onClick={() => {
                changeDebug(true);
              }}
              className={css.dButton}
            >
              yes
            </button>
            <button
              onClick={() => {
                changeDebug(false);
              }}
              className={css.dButton}
            >
              no
            </button>
          </div>
        </div>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
