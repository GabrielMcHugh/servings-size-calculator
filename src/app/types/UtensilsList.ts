export interface Utensils {
    id: string, 
    selected: boolean, 
};

export interface UtensilsList { 
    Cups: Utensils[],
    Tablespoons: Utensils[],
    Teaspoons: Utensils[]
};
