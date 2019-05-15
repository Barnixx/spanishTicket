export interface MenuData {
    name: string;
    img: string;
    subItem: Array<SubMenuData>;
}
export interface SubMenuData {
    name: string;
    weight: number;
    price: number;
}