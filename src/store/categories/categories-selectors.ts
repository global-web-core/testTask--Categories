import { RootState } from "../store";

const findCategory = (categories: RootState["categories"]["data"], slugs: string[]): RootState["categories"]["data"] | null => {
  if (!slugs.length || !categories) {
    return null;
  }
  
  const [currentSlug, ...remainingSlugs] = slugs;

  for (const category of categories) {
    if (category.slug === currentSlug) {
      if (remainingSlugs.length === 0) {
        return [category];
      }
      const found = findCategory(category.children, remainingSlugs);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

export const categoriesSelectByUrl = (state: RootState, url: string): RootState["categories"]["data"] | null => {
  const slugs = url.split('/').filter(slug => slug);
  return findCategory(state.categories.data, slugs);
}

export const categoriesSelectAll = (state: RootState): RootState["categories"] | null => state.categories;
