export type TOOLS = "eraser" | "";
export interface PixelState {
  color: string;
  size: number;
}

export interface ImageState {
  dataURL: string | null;
}

export interface ToolState {
  selectedTool: TOOLS | null;
}

export interface State {
  pixel: PixelState;
  image: ImageState;
  tool: ToolState;
}
