import * as PIXI from "pixi.js";

export default interface Renderer {
  create(stage: PIXI.Container): void;
  update(): void;
  destroy(): void;
}
