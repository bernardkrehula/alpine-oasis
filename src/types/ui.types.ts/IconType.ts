import type { ActiveIconType } from "../header.types.ts/ActiveIconType";

export type IconType = {
    name: "user" | 'blackTheme' | 'whiteTheme' | 'logout';
    variation?: string;
    onClick?: () => void;
    activeIcon?: ActiveIconType;
}