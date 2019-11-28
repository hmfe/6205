import React from "react";
import {
    createMount
} from "@material-ui/core/test-utils";

import App from "./App";



describe("<App>", () => {

    let mount;


    beforeEach(() => {
        mount = createMount();
    });

    test("renders without crashing", () => {
        const wrapper = mount(<App />);
        expect(wrapper.isEmptyRender()).toBe(false);
    });


});