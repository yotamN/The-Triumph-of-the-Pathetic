import * as PIXI from "pixi.js";
import Renderer from "./base";

export default class BattleRenderer implements Renderer {
  private static ROWS_COUNT = 10 as const;
  private static COLUMNS_COUNT = 20 as const;

  private static TILE_COLOR = 0x222222 as const;
  private static TILE_BORDER_COLOR = 0x666666 as const;
  private static TILE_BORDER_WIDTH = 2 as const;

  public create(stage: PIXI.Container): void {
    const [tileWidth, tileHeight] = this.getTileSize();

    for (let i = 0; i < BattleRenderer.COLUMNS_COUNT; i++) {
      for (let j = 0; j < BattleRenderer.ROWS_COUNT; j++) {
        let obj = new PIXI.Graphics();
        obj.beginFill(BattleRenderer.TILE_COLOR);
        obj.lineStyle(
          BattleRenderer.TILE_BORDER_WIDTH,
          BattleRenderer.TILE_BORDER_COLOR,
          1,
        );
        obj.drawRect(
          i * (tileWidth + BattleRenderer.TILE_BORDER_WIDTH),
          j * (tileHeight + BattleRenderer.TILE_BORDER_WIDTH),
          tileWidth,
          tileHeight,
        );
        stage.addChild(obj);
      }
    }
  }

  private getTileSize(): [number, number] {
    return [
      (window.innerWidth -
        BattleRenderer.COLUMNS_COUNT * BattleRenderer.TILE_BORDER_WIDTH) /
        BattleRenderer.COLUMNS_COUNT,
      (window.innerHeight -
        BattleRenderer.ROWS_COUNT * BattleRenderer.TILE_BORDER_WIDTH) /
        BattleRenderer.ROWS_COUNT,
    ];
  }

  public update(): void {}

  public destroy(): void {}
}
