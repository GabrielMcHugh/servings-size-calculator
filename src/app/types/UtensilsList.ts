export interface Utensils {
    id: string, 
    selected: boolean,
    serves: number,
    volume: number,
};

export interface UtensilsList extends Array<Utensils>{}