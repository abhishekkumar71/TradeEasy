import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const HeroImg = screen.getByAltText("center img");
    expect(HeroImg).toBeInTheDocument();
    expect(HeroImg).toHaveAttribute("src", "media/images/watchlist.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button",{name:"Signup now"});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
