import { MagnifyingGlass } from "phosphor-react";
import React from 'react';
import { Container } from './styles';

export function SearchForm() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <input
        type='text'
        placeholder='Busque por receitas, drinks, ideias e muito mais'
      />
      <button type='submit'>
        <p>Buscar</p>
        <MagnifyingGlass size={22} weight="light" />
      </button>
    </Container>
  )
}


