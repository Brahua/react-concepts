import FizzBuzzApp from "./FizzBuzzApp";
import { fireEvent, render, screen } from '@testing-library/react';

describe("FizzBuzzApp", () => {
  test("should render", () => {
    expect(FizzBuzzApp).toBeDefined();
    expect(FizzBuzzApp).toMatchSnapshot();
  });
});
