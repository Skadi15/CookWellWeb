export interface Recipe {
    name: string
    tags: string[]
    ingredients: Ingredient[]
    instructions: string[]
    notes: string[]
}

export interface Ingredient {
    name: string
    amount: string
    unit: string
}