import { describe, expect, it, vi} from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom'; 
import { AuthProvider } from '../../../context/AuthContext';
import Register from './Register';

//Mock de Navegación 
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Register Page', () => {
  it('Renderización correcta del componente', async () => {
    render(<AuthProvider><BrowserRouter><Register /></BrowserRouter></AuthProvider>)

    const logoUnsam = screen.getByAltText(/Logo de la universidad./i)
    expect(logoUnsam).toBeInTheDocument()
    expect(logoUnsam).toHaveAttribute('src',expect.stringContaining('logo-unsam-largo.png'))

    expect(screen.getByRole('heading', { name: /Registro de Usuario/i })).toBeInTheDocument()


    const nameInput = screen.getByTestId('name-input')
    expect(nameInput).toBeInTheDocument()
    const surnameInput = screen.getByTestId('surname-input')
    expect(surnameInput).toBeInTheDocument()
    const userNameInput = screen.getByTestId('userName-input')
    expect(userNameInput).toBeInTheDocument()
    const emailInput = screen.getByTestId('email-input')
    expect(emailInput).toBeInTheDocument()
    const passwordInput = screen.getByTestId('password-input')
    expect(passwordInput).toBeInTheDocument()
    const confirmPasswordInput = screen.getByTestId('confirmPassword-input')
    expect(confirmPasswordInput).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /registrarse/i })).toBeInTheDocument()
    //expect(screen.getByText(/¿Ya tenés una cuenta? Iniciá sesión./i)).toBeInTheDocument()
  })

})