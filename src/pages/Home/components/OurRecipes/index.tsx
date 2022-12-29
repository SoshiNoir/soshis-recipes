import { IRecipe, RecipeCard } from '../RecipeCard';
import { Container, RecipeList } from './styles';

type OurRecipesProps = {
  recipes: IRecipe[]
}

export function OurRecipes({ recipes }: OurRecipesProps) {
  return (
    <Container>
      <h1>
        Minhas Receitas
      </h1>

      <RecipeList>
        {recipes.map((recipe: IRecipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </RecipeList>
    </Container>
  );
}
