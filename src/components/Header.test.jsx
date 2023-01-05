import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe("header", () => {
  it("render header", () => {
    render(<Header />);
    expect(screen.queryByRole("banner")).toBeInTheDocument();
  });

  it("call submit function on button click", async () => {
    const onSubmit = vi.fn(() => console.log("jhf"));
    render(<Header onSubmit={onSubmit()} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onSubmit).toHaveBeenCalled();
  })
})