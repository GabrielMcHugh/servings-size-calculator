export interface Utensils {
    id: string, 
    selected: boolean,
    serves: number,
    volume: number,
    order: number,
};

export interface UtensilsList extends Array<Utensils>{}

export interface ListID {
    utensil: string, 
    prevUtensil: string,
    uID: number
}