import axios from 'axios';

export const fetchCategories = async () => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        return response.data.categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
