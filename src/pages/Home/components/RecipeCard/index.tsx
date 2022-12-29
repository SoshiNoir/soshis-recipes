import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db, recipesCollectionRef } from '../../../../firebase.config';

import React from 'react';
import { Container } from './styles';

export type IRecipe = {
  id: string
  title: string
  desc: string
  ingredients: string[]
  steps: string[]
}

type IDoc = {
  data: any;
  id: string;
}

type RecipeCardProps = {
  recipe: IRecipe
}


export function RecipeCard({ recipe }: RecipeCardProps) {

  return (
    <Container>
      <div key={recipe.id}>
        <img
          src='https://coffee-delivery-snowy.vercel.app/coffees/tradicional.svg'
          alt=''
        />
        <li>{recipe.title}</li>
      </div>
    </Container>
  );
}
