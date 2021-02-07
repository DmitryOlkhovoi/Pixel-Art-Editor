import React, { FC, MouseEvent, useEffect, useRef, useState } from "react";
import bresenham from "bresenham";
import logo from "./logo.svg";
import "./Canvas.css";
import { ColorResult } from "react-color";

export interface Props {
  color: ColorResult["hex"];
}

const Canvas: FC<Props> = ({ color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lastPixel, setLastPixel] = useState<number[]>();
  const context = canvasRef.current?.getContext("2d");

  function getCoordinates(e: any) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return [Math.floor(x / 5), Math.floor(y / 5)];
  }

  function onMouseDown(e: MouseEvent) {
    setLastPixel(getCoordinates(e));
  }

  function onMouseMove(e: MouseEvent) {
    if (!lastPixel) {
      return;
    }

    const pixel = getCoordinates(e);
    const pixels = bresenham(lastPixel![0], lastPixel![1], pixel[0], pixel[1]);

    fillPixels(pixels);
    setLastPixel(pixel);
  }

  function onMouseUp() {
    fillPixel({ x: lastPixel![0], y: lastPixel![1] });
    setLastPixel(void 0);
  }

  function fillPixels(pixels: any) {
    pixels.forEach(fillPixel);
  }

  function fillPixel({ x, y }: any) {
    context!.fillStyle = color;
    context!.fillRect(x, y, 1, 1);
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      width="100"
      height="100"
    ></canvas>
  );
};

export default Canvas;
