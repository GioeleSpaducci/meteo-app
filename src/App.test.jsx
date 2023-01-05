import { describe, it, expect } from 'vitest';
import { getByRole, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App', () => {
	it("'no weather' shows at first render", () => {
		render(<App />);
		expect(screen.getByText(/No weather loaded.../i)).toBeInTheDocument();
	});
	it("renders day weather when city is searched", async () => {
		render(<App />);
		const button = screen.getByRole("button");
		const input = screen.getByRole("textbox");
		await userEvent.type(input, "bari");
		userEvent.click(button);
		await waitFor(() => {
			expect(screen.getByRole('heading', { name: /friday 6/i })).toBeInTheDocument;
		})
	});
	it("renders current weather when city is searched", async () => {
		render(<App />);
		const button = screen.getByRole("button");
		const input = screen.getByRole("textbox");
		await userEvent.type(input, "bari");
		userEvent.click(button);
		await waitFor(() => {
			expect(screen.getByRole('heading', { name: /bari/i })).toBeInTheDocument;
		})
	});
	it("shows error message when incorrect input is given", async () => {
		render(<App />);
		const button = screen.getByRole("button");
		const input = screen.getByRole("textbox");
		await userEvent.type(input, "not a real city");
		userEvent.click(button);
		await waitFor(() => {
			expect(screen.getByRole('heading', { name: /something went wrong, try again\.\.\./i })).toBeInTheDocument;
		})
	})
});