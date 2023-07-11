import * as PIXI from "pixi.js";
import Battle from "./renderers/battle-scene";

// Create the application helper and add its render target to the page
let app = new PIXI.Application({
  resizeTo: window,
});
document.body.appendChild(app.view);

const battle = new Battle();
battle.create(app.stage);
