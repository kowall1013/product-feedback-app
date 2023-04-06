import { useRef, useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { COLORS, FONT_WEIGHT } from "utils/constant";
import useOutsideClick from "hooks/useOutsideClick";
import { useAppDispatch } from "hooks/useAppDispatch";
import { sortFeedbackList } from "pages/suggestions/SugestionsSlice";

const MenuContainer = styled.div`
	position: relative;
	display: flex;
	height: 40px;
	cursor: pointer;
`;

type NavProps = {
	active: boolean;
};

const Nav = styled.nav<NavProps>`
	background-color: ${COLORS.white};
	border-radius: 10px;
	position: absolute;
	top: 60px;
	left: 8px;
	transform: translateY(-20px);
	border: none;
	width: 255px;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

	&:foucs {
		outline: none;
	}

	${({ active }) =>
		active &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		`}

	li {
		border-bottom: 1px solid #dddddd;
		padding: 15px 20px;
		font-size: 1.6rem;
	}
`;

type ButtonStyledProps = {
	isActive: boolean;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
	display: inline-flex;
	align-items: center;
	background-color: transparent;
	border: none;
	color: ${COLORS.grayLight};
	font-size: 1.3rem;

	span {
		font-weight: ${FONT_WEIGHT.fw_700};
		margin-right: 8px;
		margin-left: 4px;
	}

	svg {
		transform: ${({ isActive }) => (isActive ? "rotate(0)" : "rotate(180deg)")};
		transition: transform 0.4s ease;
	}
`;

type ListItem = {
	id: number;
	name: string;
};

type DropdownMenuProps = {
	list: ListItem[];
};

function DropdownMenu({ list }: DropdownMenuProps): JSX.Element {
	const dispatch = useAppDispatch();
	const dropdownRef = useRef<HTMLElement>(null);
	const handlerRef = useRef<HTMLButtonElement>(null);
	const [isActive, setIsActive] = useState(false);
	const [selectedItem, setSelectedItem] = useState(list[0].name);

	const onClick = () => setIsActive(!isActive);
	const onOutsideClick = useCallback(() => {
		setIsActive(false);
	}, []);

	useOutsideClick(dropdownRef, handlerRef, onOutsideClick);

	function handleSelectItem(item: string) {
		setSelectedItem(item);
		setIsActive(false);
		dispatch(sortFeedbackList(item));
	}

	return (
		<MenuContainer>
			<ButtonStyled ref={handlerRef} onClick={onClick} isActive={isActive}>
				Sort by: <span>{selectedItem}</span>
				<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 6l4-4 4 4" stroke="#F2F4FE" strokeWidth="2" fill="none" fillRule="evenodd" />
				</svg>
			</ButtonStyled>
			<Nav ref={dropdownRef} active={isActive}>
				<ul>
					{list.map((item) => (
						<li onClick={() => handleSelectItem(item.name)} key={item.id}>
							{item.name}
						</li>
					))}
				</ul>
			</Nav>
		</MenuContainer>
	);
}

export default DropdownMenu;
