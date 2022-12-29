import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { recipesCollectionRef } from "../../firebase.config";
import { OurRecipes } from "./components/OurRecipes";
import { Container } from './styles';

type IDoc = {
  data: any;
  id: string;
}

export function Home() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data: any = await getDocs(recipesCollectionRef);
      setRecipes(data.docs.map((doc: IDoc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, []);

  return (
    <Container>
      <OurRecipes recipes={recipes} />
    </Container>
  )
}