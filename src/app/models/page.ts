export interface Page {
}
export interface PageTitle{
    id: number;
    slug: string;
    status: string;
    title: Title;
    author: number;
    menu_order: number;
}
export interface Title{
    rendered: string
}