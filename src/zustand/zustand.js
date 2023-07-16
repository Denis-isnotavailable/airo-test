import { create } from 'zustand';


export const useRecipes = create((set) => ({
  recipes: [],
  page: 1,
  listToDeleteRecipes: [],

  togglelistToDeleteRecipes: (id) => set((state) => {    
    if (state.listToDeleteRecipes.includes(id)) {      
      const index = state.listToDeleteRecipes.indexOf(id);
      state.listToDeleteRecipes.splice(index, 1);
      return {listToDeleteRecipes: state.listToDeleteRecipes}
    } else {
      return { listToDeleteRecipes: [...state.listToDeleteRecipes, id] };
    }    
  }),

  clearListToDeleteRecipes: () => set(() => ({ listToDeleteRecipes: [] })),

  nextPage: () => set((state) => ({ page: state.page + 1 })),

  deleteRecipe: (resId) => set((state) => {
    const res = state.recipes.filter(({id}) => id !== resId);
    return{ recipes: res }
  }),
  
  fetch: async (page) => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
      const data = await response.json();
      set((state) => {
        const result = [];
        data.forEach(el => {
          const isPresent = state.recipes.find(({ id }) => id === el.id);
          !isPresent && result.push(el);
        });
        return { recipes: [...state.recipes, ...result] }
      });
    } catch (error) {
      alert("Can't connect with server")
    }    
  },
}));