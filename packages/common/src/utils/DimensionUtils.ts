import { Dimensions } from "react-native";

class DimensionUtils {
  private _height = 0;
  private _width = 0;

  constructor(dimensions: Dimensions) {
    this.height = dimensions.get('window').height;
    this.width = dimensions.get('window').width;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }
}
const dimensionUtils = new DimensionUtils(Dimensions);
export { dimensionUtils as DimensionUtils };