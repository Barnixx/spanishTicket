export interface MenuData {
    name: string;
    subItem: Array<SubMenuData>;
}
export interface SubMenuData {
    name: string;
    weight: number;
    price: number;
}