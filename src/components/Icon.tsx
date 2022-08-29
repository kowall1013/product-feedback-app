import { useCallback } from "react";
import styled from "styled-components";
import { ICON_TYPE } from "utils/constant";

const IconWrapper = styled.span`
  position: relative;

  &::after {
    --tap-increment: -16px;
    content: "";
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  }
`;

type IconProps = {
  width?: string;
  height?: string;
  color?: string;
  type: string;
};

function Icon({
  width = "18",
  height = "17",
  color = "#FFF",
  type,
}: IconProps): JSX.Element {
  const returnIcon = useCallback(() => {
    switch (type) {
      case ICON_TYPE.hamburger:
        return (
          <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <g fill={color} fillRule="evenodd">
              <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
            </g>
          </svg>
        );
      case ICON_TYPE.close:
        return (
          <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
              fill={color}
              fillRule="evenodd"
            />
          </svg>
        );
      case ICON_TYPE.plus:
        return (
          <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg">
            <text
              transform="translate(-24 -20)"
              fill="#F2F4FE"
              fillRule="evenodd"
              fontFamily="Jost-Bold, Jost"
              fontSize="14"
              fontWeight="bold"
            >
              <tspan x="24" y="27.5">
                +
              </tspan>
            </text>
          </svg>
        );
    }
  }, [color, height, type, width]);

  return <IconWrapper>{returnIcon()}</IconWrapper>;
}

export default Icon;
