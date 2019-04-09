import { createStore } from 'redux';

const initialState = {
    name: '',
    recipe: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipies: []
}
export const ADD_RECIPE               = "ADD_RECIPE"
export const UPDATE_NAME              = "RECIPE_NAME"
export const UPDATE_CATEGORY          = "RECIPE_CATEGORY"
export const UPDATE_INGREDIENTS       = "UPDATE_INGREDIENTS"
export const UPDATE_INSTRUCTIONS      = "UPDATE_INSTRUCTIONS"
export const UPDATE_AUTHOR_LAST_NAME  = "UPDATE_AUTHOR_LAST_NAME"
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME"

const reducer = (state = initialState, action) => { 
    const { type, payload } = action;
    switch (type) { 
        default: 
            return state
        case UPDATE_NAME:
            return { ...state, name: payload }
        case UPDATE_CATEGORY:
            return { ...state, category: payload }    
        case UPDATE_AUTHOR_FIRST_NAME:
            return { ...state, author_first_name: payload }
        case UPDATE_AUTHOR_LAST_NAME:
            return { ...state, author_last_name: payload }
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return { ...state, ingredients: newIngredients }
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return { ...state, instructions: newInstructions }
        case ADD_RECIPE:
            const {
                name, category, authorFirst, authorLast,
                ingredients,
                instructions
            } = state

            const recipe = {
                name, category, authorFirst, authorLast,
                ingredients,
                instructions
            }
            const newRecipies = [...state.recipies, recipe]
            return {...state, recipies: newRecipies}
    }
}

export default createStore(reducer);