export interface TileModel {
  isEmpty(): boolean;
}

export default class BattleTile<T> implements TileModel {
  constructor(public item: T | undefined) {}

  public isEmpty(): boolean{
    return this.item != undefined;
  }
}