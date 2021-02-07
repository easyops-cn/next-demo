import React from "react";

export interface CarForSaleProps {
  paint?: string;
  running?: boolean;
}

export function CarForSale({
  paint,
  running,
}: CarForSaleProps): React.ReactElement {
  const refSvg = React.useRef<SVGSVGElement>();

  React.useEffect(() => {
    if (running) {
      refSvg.current.unpauseAnimations();
    } else {
      refSvg.current.pauseAnimations();
    }
  }, [running]);

  return (
    <div style={{ color: paint ?? "#98c8e7" }}>
      <svg version="1.1" viewBox="0 0 800 90" ref={refSvg}>
        <defs>
          <g id="car-wheel">
            <circle
              r="12"
              stroke="#396180"
              strokeWidth="3"
              fill="currentColor"
              cx="0"
              cy="0"
            />
            <use href="#car-wheel-spokes" />
            <circle r="2.5" strokeWidth="0" fill="#396180" cx="0" cy="0" />
          </g>
          <g id="car-wheel-spokes">
            <g>
              <use href="#car-wheel-spoke" />
            </g>
            <g transform="rotate(45)">
              <use href="#car-wheel-spoke" />
            </g>
            <g transform="rotate(90)">
              <use href="#car-wheel-spoke" />
            </g>
            <g transform="rotate(135)">
              <use href="#car-wheel-spoke" />
            </g>
          </g>
          <g id="car-wheel-spoke">
            <line
              x1="-12"
              y1="0"
              x2="12"
              y2="0"
              stroke="#396180"
              strokeWidth="1"
            />
          </g>
        </defs>
        <g>
          <ellipse
            fill="rgba(128,128,128,0.1)"
            cx="90"
            cy="70"
            rx="72"
            ry="14"
          />
          <path
            fill="currentColor"
            stroke="#396180"
            strokeWidth="2"
            d="M 135 65 Q 145 40 95 35 Q 90 25 90 15 Q 5 5 15 65 Z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              type="translate"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0 1;-1 0;0 -1;1 0;0 1"
              dur="400ms"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </path>
          <use href="#car-wheel" x="45" y="63">
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              type="rotate"
              from="0 45 63"
              to="360 45 63"
              begin="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </use>
          <use href="#car-wheel" x="110" y="63">
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              type="rotate"
              from="0 110 63"
              to="360 110 63"
              begin="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </use>
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            type="translate"
            from="-150 0"
            to="800 0"
            begin="0"
            dur="15s"
            repeatCount="indefinite"
            calcMode="linear"
          />
        </g>
      </svg>
    </div>
  );
}
