interface Utensils {
    id: string, 
    selected: boolean, 
};

interface UtensilsList { 
    Cups: Utensils[],
    Tablespoons: Utensils[],
    Teaspoons: Utensils[]
};
