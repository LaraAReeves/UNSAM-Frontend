import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'node:test';


describe('Welcome Page', () =>{
  it('Renderización correcta del componente', async () => {
    render(<BrowserRouter><Welcome /></BrowserRouter>,)

    


  })
})