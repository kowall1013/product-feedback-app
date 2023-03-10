//External
import { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { createPortal } from "react-dom";
//Utils
import { COLORS, CONSTANT_VARIABLES } from "utils/constant";

type DrawerContainerProps = {
	open: boolean;
};

const DrawerContainer = styled.div<DrawerContainerProps>``;

type DrawerStyledProps = {
	position: "left" | "right";
	isOpen: boolean;
};

const DrawerStyled = styled.div<DrawerStyledProps>`
	background-color: ${COLORS.white};
	width: 271px;
	height: 100%;
	overflow: auto;
	position: fixed;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
	transition: transform var(--transition-speed) ease;
	z-index: 1000;
	top: ${CONSTANT_VARIABLES.headerHeight};
	${({ position }) =>
		position === "left" &&
		css`
			left: 0;
			transform: translateX(-100%);
		`}
	${({ position }) =>
		position === "right" &&
		css`
			right: 0;
			transform: translateX(100%);
		`};
	${({ isOpen }) =>
		isOpen &&
		css`
			transform: translateX(0);
		`};
`;

type BackdropProps = {
	isOpen: boolean;
};

const Backdrop = styled.div<BackdropProps>`
	visibility: hidden;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.5);
	transition: opacity var(--transition-speed) ease,
		visibility var(--transition-speed) ease;
	width: 100%;
	height: 100%;
	top: ${CONSTANT_VARIABLES.headerHeight};
	left: 0;
	position: fixed;
	pointer-events: none;
	z-index: 0;
	${({ isOpen }) =>
		isOpen &&
		css`
			visibility: visible;
			opacity: 1;
			pointer-events: auto;
			z-index: 999;
		`}
`;

type DrawerProps = {
	isOpen: boolean;
	children: JSX.Element;
	onClose: () => void;
	position?: "left" | "right";
};

function createPortalRoot() {
	const drawerRoot = document.createElement("div");
	drawerRoot.setAttribute("id", "drawer-root");
	return drawerRoot;
}

function Drawer({
	isOpen,
	children,
	onClose,
	position = "right",
}: DrawerProps): JSX.Element {
	const bodyRef = useRef(document.querySelector("body"));
	const portalRootRef = useRef(
		document.getElementById("drawer-root") || createPortalRoot()
	);

	useEffect(() => {
		const onKeyPress = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			window.addEventListener("keyup", onKeyPress);
		}

		return () => {
			window.removeEventListener("keyup", onKeyPress);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		if (bodyRef.current && portalRootRef.current) {
			bodyRef.current.appendChild(portalRootRef.current);
			const portal = portalRootRef.current;
			const bodyEl = bodyRef.current;

			return () => {
				portal.remove();
				bodyEl.style.overflow = "";
			};
		}
	}, []);

	useEffect(() => {
		const updatePageScroll = () => {
			if (bodyRef.current) {
				if (isOpen) {
					bodyRef.current.style.overflow = "hidden";
				} else {
					bodyRef.current.style.overflow = "";
				}
			}
		};
		updatePageScroll();
	}, [isOpen]);

	return createPortal(
		<DrawerContainer aria-hidden={isOpen ? "false" : "true"} open={isOpen}>
			<DrawerStyled position={position} isOpen={isOpen} role="dialog">
				{children}
			</DrawerStyled>
			<Backdrop onClick={onClose} isOpen={isOpen} />
		</DrawerContainer>,
		portalRootRef.current
	);
}

export default Drawer;
