import { HTMLProps, Omit, WithThemeProp } from '../../utils/Styled';
export declare type AvatarSizes = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL';
export declare type Display = 'inline' | 'inline-block' | 'block';
export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'>, WithThemeProp {
    display?: string;
    size?: AvatarSizes;
    bgColor?: string;
    textColor?: string;
    hoverEffect?: boolean;
    hoverTextColor?: string;
    hoverBgColor?: string;
    hoverShadowColor?: string;
    hoverTextShadowColor?: string;
    res?: string;
    disabled?: boolean;
}
