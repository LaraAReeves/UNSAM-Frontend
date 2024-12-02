import { describe, expect, it, vi} from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom'; 
import Login from './Login';

//Mock de Navegación 
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('Login Page', () => {
  it('Renderización correcta del componente', async () => {
    render(<BrowserRouter><Login /></BrowserRouter>)
    //screen.debug() //Para ver que se renderiza por terminal

    const logoUnsam = screen.getByAltText(/Logo UNSAM/i)
    expect(logoUnsam).toBeInTheDocument()
    expect(logoUnsam).toHaveAttribute('src',expect.stringContaining('logo-unsam-largo.png'))

    expect(screen.getByText(/Tornaguía/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('Mensaje de error por mail incorrecto', async () => {
    render(<BrowserRouter><Login /></BrowserRouter>)

    //simulo carga del input y envio el form
    fireEvent.input(screen.getByLabelText(/email/i), {target: { value: 'invalidemail' },})
    fireEvent.submit(screen.getByRole('button', { name: /login/i }))
    // verifica que se muestra el mensaje de error para el email
    await waitFor(() => {
      expect(
        screen.getByText(/ingrese una dirección de email válida/i)).toBeInTheDocument()
    })
  })

  it('Mensaje de error por password demasiado corta', async () => {
    render(<BrowserRouter><Login /></BrowserRouter>)

    //simulo carga del input y envio el form
    fireEvent.input(screen.getByLabelText(/password/i), {target: { value: '123' },})
    fireEvent.submit(screen.getByRole('button', { name: /login/i }))
    // verifica que se muestra el mensaje de error para el email
    await waitFor(() => {
      expect(
        screen.getByText(/la contraseña debe tener al menos 6 caracteres/i)).toBeInTheDocument()
    })
  })

  it('Ruteo correcto despues de la carga del form', async () => {
    const mockNavigate = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)

    render(<BrowserRouter><Login /></BrowserRouter>)

    //cargo los inputs correctamente
    fireEvent.input(screen.getByLabelText(/email/i), {target: { value: 'test@example.com' },})
    fireEvent.input(screen.getByLabelText(/password/i), {target: { value: '123456' },})

    fireEvent.submit(screen.getByRole('button', { name: /login/i }))

    // verifico que 'navigate' sea llamado después de enviar el formulario
    await waitFor(() => {expect(mockNavigate).toHaveBeenCalledWith('/')})

  })
})
