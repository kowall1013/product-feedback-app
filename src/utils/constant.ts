const BREAKPOINTS = {
	tabletMin: 768,
	desktopMin: 1440,
};

export const QUERIES = {
	tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
	desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

export const DEVICE = {
	M: "(min-width: 768px)",
	L: "(min-width: 1440px)",
};

export const FONT_WEIGHT = {
	fw_400: 400,
	fw_500: 500,
	fw_600: 600,
	fw_700: 700,
	fw_800: 800,
};

export const COLORS = {
	violet: "hsla(282, 83%, 52%)",
	blue: "hsla(230, 76%, 59%)",
	blutLight: "hsla(204, 94%, 68%)",
	dark: "hsla(230, 31%, 31%)",
	darkLight: "hsla(231, 33%, 34%)",
	gray: "hsla(224, 20%, 49%)",
	grayLight: "hsla(230, 86%, 97%, 1)",
	white: "hsla(0, 0%, 100%)",
	black: "hsla(0, 0%, 0%)",
	whiteDark: "hsla(230, 60%, 98%)",
	WhiteDarker: "hsla(231, 100%, 97%)",
	orange: "hsla(14, 83%, 74%)",
};

export const ICON_TYPE = {
	hamburger: "HAMBURGER",
	close: "ClOSE",
	plus: "PLUS",
	arrow_up: "ARROW_UP",
	bulb: "BULB",
	comments: "COMMENTS",
	upvotes: "UPVOTES",
};

export const CONSTANT_VARIABLES = {
	headerHeight: "72px",
};

export const Z_INDEX = {
	header: "1",
};
