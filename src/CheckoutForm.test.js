import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from './components/CheckoutForm';



test("renders without errors", () => {
    render(<CheckoutForm />);
})

test("Can't be empty", async () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name:/i);
    userEvent.type(firstName, "Katherine");

    const lastName = screen.getByLabelText(/last name:/i);
    userEvent.type(lastName, "LeBlanc");

    const address = screen.getByLabelText(/address:/i);
    userEvent.type(address, "123 South St.");

    const city = screen.getByLabelText(/city:/i);
    userEvent.type(city, "Hollywood");

    const state = screen.getByLabelText(/state:/i);
    userEvent.type(state, "CA");

    const zip = screen.getByLabelText(/zip:/i);
    userEvent.type(zip, "90210");

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const resultText = screen.queryByText("Katherine")
        expect(resultText).toBeInTheDocument();
    });
    
});