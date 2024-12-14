export type SubmenuType = {
    subname: string;
    subhref: string;
}

export type LinkType = {
    name: string;
    href?: string;
    submenu?: SubmenuType[] | undefined;
}