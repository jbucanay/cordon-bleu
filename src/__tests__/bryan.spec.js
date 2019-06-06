//unit tests bryan


import React from "react";
import { create } from "react-test-renderer";
import Burgerking from "../components/menus/burgerking";
import Chickfila from "../components/menus/chickfila";
import Jackinthebox from "../components/menus/jackinthebox";
import Wendys from "../components/menus/wendys";
import Papajohns from "../components/menus/papajohns";

import axios from "axios";


describe('Examining the syntax of Jest tests', () => {

    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
    });
});


jest.mock("axios");
describe("Burger King component loads correct api items", () => {
    it("shows a list of burger king's menu items", async () => {
        const response = {
            data: [{ name: "WHOPPER" }, { name: "KING'S SNACKBOX" }]
        };
        axios.get.mockResolvedValue(response);
        const component = create(<Burgerking />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        const root = component.root;
        const listOfNames = root.findAll(element => element.type === "h3");
        expect(listOfNames[0].props.children).toBe("WHOPPER");
        expect(listOfNames[1].props.children).toBe("KING'S SNACKBOX");
    });
});




jest.mock("axios");
describe("Wendys component loads correct api items", () => {
    it("shows a list of Wendy's menu items", async () => {
        const response = {
            data: [{ name: "Barbecue Cheeseburger" }, { name: "S'Awesome Bacon Cheeseburger" }]
        };
        axios.get.mockResolvedValue(response);
        const component = create(<Wendys />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        const root = component.root;
        const listOfNames = root.findAll(element => element.type === "h3");
        expect(listOfNames[0].props.children).toBe("Barbecue Cheeseburger");
        expect(listOfNames[1].props.children).toBe("S'Awesome Bacon Cheeseburger");
    });
});

jest.mock("axios");
describe("Chick Fil A component loads correct api items", () => {
    it("shows a list of Chick Fil A's menu items", async () => {
        const response = {
            data: [{ name: "Chick-Fil-a Chicken Sandwich" }, { name: "Chick-Fil-a Deluxe Sandwich" }]
        };
        axios.get.mockResolvedValue(response);
        const component = create(<Chickfila />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        const root = component.root;
        const listOfNames = root.findAll(element => element.type === "h3");
        expect(listOfNames[0].props.children).toBe("Chick-Fil-a Chicken Sandwich");
        expect(listOfNames[1].props.children).toBe("Chick-Fil-a Deluxe Sandwich");
    });
});

jest.mock("axios");
describe("Papa Johns component loads correct api items", () => {
    it("shows a list of papa john's menu items", async () => {
        const response = {
            data: [{ name: "BBQ Chicken & Bacon" }, { name: "BBQ Meats Pizza" }]
        };
        axios.get.mockResolvedValue(response);
        const component = create(<Papajohns />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        const root = component.root;
        const listOfNames = root.findAll(element => element.type === "h3");
        expect(listOfNames[0].props.children).toBe("BBQ Chicken & Bacon");
        expect(listOfNames[1].props.children).toBe("BBQ Meats Pizza");
    });
});

jest.mock("axios");
describe("Jack in the box component loads correct api items", () => {
    it("shows a list of Jack in the Box's menu items", async () => {
        const response = {
            data: [{ name: "Bacon & Swiss Buttery Jack" }, { name: "Classic Buttery Jack" }]
        };
        axios.get.mockResolvedValue(response);
        const component = create(<Jackinthebox />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        const root = component.root;
        const listOfNames = root.findAll(element => element.type === "h3");
        expect(listOfNames[0].props.children).toBe("Bacon & Swiss Buttery Jack");
        expect(listOfNames[1].props.children).toBe("Classic Buttery Jack");
    });
});

