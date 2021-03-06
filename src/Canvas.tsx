import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import bresenham from "bresenham";
import "./Canvas.css";
import { useDispatch, useSelector } from "react-redux";
import { setDataURL, setLoadedURL } from "./store/actions/image";
import { getRandomPromoImage } from "./utils";
import { State } from "./types";

const WIDTH = 100;
const HEIGHT = 100;

const Canvas: FC = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>();
  const size = useSelector((state: State) => state.pixel.size);
  const color = useSelector((state: State) => state.pixel.color);
  const imageDataURL = useSelector((state: State) => state.image.dataURL);
  const loadedImageDataURL = useSelector(
    (state: State) => state.image.loadedDataURL
  );
  const selectedTool = useSelector((state: State) => state.tool.selectedTool);

  const [lastPixel, setLastPixel] = useState<number[]>();
  const [startPixel, setStartPixel] = useState<number[]>();

  useEffect(() => {
    setContext(canvasRef.current!.getContext("2d"));
  }, []);

  useEffect(() => {
    if (context) {
      context.fillStyle = color;
    }
  }, [context, color]);

  // TODO move loading to a function?
  useEffect(() => {
    if (imageDataURL) {
      const img = new Image();

      img.onload = function () {
        context?.drawImage(img, 0, 0);
      };

      img.src = imageDataURL;
    }
  }, [context]);

  useEffect(() => {
    if (loadedImageDataURL === null) {
      return;
    }

    if (loadedImageDataURL === "clear") {
      context?.clearRect(0, 0, WIDTH, HEIGHT);
      dispatch(setLoadedURL(null));
      dispatch(setDataURL(getRandomPromoImage()));

      return;
    }

    const img = new Image();

    img.onload = function () {
      context?.clearRect(0, 0, WIDTH, HEIGHT);
      context?.drawImage(img, 0, 0);
    };

    img.src = loadedImageDataURL!;
  }, [loadedImageDataURL]);
  // TODO -//-

  function getCoordinates(e: any) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return [Math.floor(x / 5), Math.floor(y / 5)];
  }

  function onMouseDown(e: MouseEvent) {
    const pixelCoordinates = getCoordinates(e);

    setLastPixel(pixelCoordinates);
    setStartPixel(pixelCoordinates);
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
    const fx = x - Math.floor(size / 2);
    const fy = y - Math.floor(size / 2);

    switch (selectedTool) {
      case "eraser": {
        context?.clearRect(fx, fy, size, size);
        break;
      }
      case "mirror": {
        const mirror = [startPixel![0] - fx, startPixel![1] - fy];
        context!.fillRect(
          startPixel![0] + mirror[0],
          startPixel![1] - mirror[1],
          size,
          size
        );
        context!.fillRect(fx, fy, size, size);
        break;
      }
      default: {
        context!.fillRect(fx, fy, size, size);
      }
    }
  }

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      className="canvas-wrapper"
    >
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT}></canvas>
    </div>
  );
};

export default Canvas;
