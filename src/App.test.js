import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './components/CheckoutForm';


test("renders without errors", () => {
    render(<CheckoutForm />);
})
