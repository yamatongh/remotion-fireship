import { mix } from "../components/Animations";
import { CANVAS } from "../components/Canvas";
import { BG_COLOR3 } from "../helpers/colors";

import { Cube } from "./Cube";

const ROWS = 2;
const COLS = 4;
export const PAGES = ROWS * COLS;
const startWidth = CANVAS.width / COLS;
const startHeight = CANVAS.height / ROWS;
const STROKE_WIDTH = 15;

interface PageProps {
  index: number;
  overlay: number;
  offset: number;
  frame: number;
}

export const Page = ({ index, overlay, offset, frame }: PageProps) => {
  const PADDING = mix(overlay, 75, 0);
  const startX = (index % COLS) * startWidth + PADDING;
  const startY = Math.floor(index / COLS) * startHeight + PADDING;
  const progress = 0.3 + index / PAGES + offset / 4;
  const x = mix(overlay, startX, 0);
  const y = mix(overlay, startY, 0);
  const width = mix(overlay, startWidth, CANVAS.width);
  const height = mix(overlay, startHeight, CANVAS.height);
  const size = mix(overlay, 300, 900);
  const center = { x: width / 2 - PADDING, y: height / 2 - PADDING };
  const textX = mix(overlay, 650, 650 * 4);
  const textY = mix(overlay, 150, 600);
  const fontSize = mix(overlay, 150, 600);
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        width={width - 2 * PADDING}
        height={height - 2 * PADDING}
        fill={BG_COLOR3}
        rx={25}
      />
      <Cube
        strokeWidth={mix(overlay, STROKE_WIDTH, STROKE_WIDTH * 2)}
        center={center}
        size={size}
        transform={[
          { rotateX: (progress * -Math.PI) / 4 },
          { rotateY: (progress * -Math.PI) / 4 },
        ]}
      />
      <text
        fontFamily="Rubik"
        fontWeight="500"
        fill="white"
        fontSize={fontSize}
        y={textY}
        x={textX}
      >
        {frame}
      </text>
    </g>
  );
};