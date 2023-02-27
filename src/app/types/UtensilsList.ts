export interface Utensils {
    id: string, 
    selected: boolean,
    serves: number,
    volume: number,
    order: number,
};

export interface UtensilsList extends Array<Utensils>{}

export interface ListID {
    id: number;
    tool: string;
}