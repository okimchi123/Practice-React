import { useState } from "react"
import { Plus } from "lucide-react"

export default function ChefMain(){
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    /**
     * Challenge: use form action instead of onSubmit to
     * handle the data from the form
     */

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return(
        <main className="flex flex-col pb-5">
            <form onSubmit={handleSubmit} className="add-ingredient-form flex gap-3">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="border-1 border-gray-300 rounded-md pl-2 pr-8 py-1 text-xs"
                />
                <button className="bg-black text-white px-8 py-2 rounded-md text-xs flex items-center gap-1">
                    <Plus size={15} />
                    Add ingredient
                </button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}