import { useLayoutEffect, useState } from "react";

import { renderGame } from "./instance";
import css from "./style.module.css";

let game: Phaser.Game | null = null;

export const Game = () => {
  const [refBox, setRefBox] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (refBox) {
      game = renderGame(refBox.offsetWidth);
    }

    return () => {
      game?.destroy(true, false);
    };
  });

  return (
    <div className={css.root}>
      <div
        className={css.game}
        id="game-box"
        ref={(ref) => {
          setRefBox(ref);
        }}
      />

      <div className={css.movement}>
        <p>
          <b>Left/Right arrow</b> -- move
        </p>

        <p>
          <b>Up arrow</b> -- jump
        </p>

        <p>
          <b>Up arrow + Left/Right arrow, when hitting the wall</b> -- spring back
        </p>

        <p>
          <b>Enter</b> -- save position
        </p>

        <p>
          <b>Space</b> -- teleport to saved position
        </p>
      </div>
    </div>
  );
};
