import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// smoke test
test('Carousel renders without crashing', () => {
  render(<Carousel />)
})

test('matches snapshot', () => {
  const {asFragment} = render(<Carousel />)
  expect(asFragment()).toMatchSnapshot()
})

// Carousel snapshot test

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);


  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

it("should hide the left arrow at the beginning of list", function() {
  const { queryByTestId, queryByAltText, getByTestId } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");

  // it would be better to not hardcode this loop. How to access the amount of cards?
  for (let i = 0; i <= 2; i++) {
    fireEvent.click(rightArrow);
  }
  
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
  


  // expect the second image to show, but not the first
 
});
