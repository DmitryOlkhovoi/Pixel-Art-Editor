import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import bresenham from "bresenham";
import "./Canvas.css";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./types";
import { setDataURL } from "./store/actions/image";

const Canvas: FC = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>();
  const size = useSelector((state: State) => state.pixel.size);
  const color = useSelector((state: State) => state.pixel.color);
  const imageDataURL = useSelector((state: State) => state.image.dataURL);

  const [lastPixel, setLastPixel] = useState<number[]>();

  useEffect(() => {
    setContext(canvasRef.current!.getContext("2d"));
  }, []);

  useEffect(() => {
    if (imageDataURL) {
      const img = new Image();

      img.onload = function () {
        context?.drawImage(img, 0, 0);
      };

      img.src = imageDataURL;
    }
  }, [context, imageDataURL]);

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
    if (!lastPixel) {
      return;
    }

    fillPixel({ x: lastPixel![0], y: lastPixel![1] });
    setLastPixel(void 0);

    dispatch(setDataURL(canvasRef.current?.toDataURL()));
  }

  function fillPixels(pixels: any) {
    pixels.forEach(fillPixel);
  }

  function fillPixel({ x, y }: any) {
    context!.fillStyle = color;
    context!.fillRect(
      x - Math.floor(size / 2),
      y - Math.floor(size / 2),
      size,
      size
    );
  }

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className="canvas-wrapper"
    >
      <canvas ref={canvasRef} width="100" height="100"></canvas>
    </div>
  );
};

export default Canvas;
