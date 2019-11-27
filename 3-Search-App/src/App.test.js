import React from "react";
import {
    createShallow,
    createRender,
    createMount
} from "@material-ui/core/test-utils";

import App from "./App";
import { SearchHistory } from "./Components/SearchHistory/SearchHistory";
import ReactTestUtils from "react-dom/test-utils";

const mockFunction = jest.fn();

describe("App", () => {
    let shallow;
    let mount;
    let render;

    beforeEach(() => {
        render = createRender();
        mount = createMount();
        shallow = createShallow();
    });

    test("renders without crashing", () => {
        render(<App />);
    });

    test("Should contain search history", () => {
        const wrapper = shallow(<App />);

        console.log(wrapper);

        // ReactTestUtils.findAllInRenderedTree("SearchHistory");
    });
});
