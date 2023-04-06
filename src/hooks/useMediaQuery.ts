import { useEffect, useReducer } from "react";

type MediaState = {
	isMatch: boolean;
	mediaLoaded: boolean;
};

type MediaActionType = { type: "mediaChanged"; payload: boolean };

const mediaReducer = (state: MediaState, action: MediaActionType) => {
	switch (action.type) {
		case "mediaChanged":
			return {
				isMatch: action.payload,
				mediaLoaded: true,
			};
		default:
			throw new Error("Unsupported action type id mediaReducer");
	}
};

export const useMediaQuery = (query: string): MediaState => {
	const [state, disptach] = useReducer(mediaReducer, {
		isMatch: false,
		mediaLoaded: false,
	});

	useEffect(() => {
		let mounted = true;
		const mql = window.matchMedia(query);
		const onChange = () => {
			console.log("onChange");
			if (!mounted) {
				return;
			}
			disptach({ type: "mediaChanged", payload: mql.matches });
		};

		mql.addEventListener("change", onChange);
		disptach({ type: "mediaChanged", payload: mql.matches });

		return () => {
			mounted = false;
			mql.removeEventListener("change", onChange);
		};
	}, [query]);

	return state;
};
