import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// base of Card model

// research how to automatially create "snapshots" folder

// byText looks for an exact match
// you can add second arguent for something like "contains"
// set "exact" property to false

// allBy is probably more useful for elements that are looped or mapped or duplicated


// snapshot test requires an html example file usualy under "_snapshots_" folder
// .getByText 
// vs
// .queryByText Will do similar but will return Null instead of throwing error

// checkout react testing library


// Card Smoke Test
test('it renders without crashing', () => {
    render(<Card />)
})

test('matches snapshot', () => {
    const {asFragment} = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})



