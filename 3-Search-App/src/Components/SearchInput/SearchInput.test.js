import React from "react";
import {
    createMount
} from "@material-ui/core/test-utils";

import SearchInput from "./SearchInput";

const mockFn = jest.fn();
const mockArray = [];
const mockCountryArray = [
    {
        uid: 1,
        name: 'country1',
        date: Date.now(),
        flag: 'someUrl'
    },
    {
        uid: 2,
        name: 'country2',
        date: Date.now(),
        flag: 'someUrl'
    },
    {
        uid: 3,
        name: 'country3',
        date: Date.now(),
        flag: 'someUrl'
    },
    {
        uid: 4,
        name: 'country4',
        date: Date.now(),
        flag: 'someUrl'
    }
]

describe("<SearchInput>", () => {
    let mount;

    beforeEach(() => {
        mount = createMount();
    });

    test("renders without crashing", () => {
        const wrapper = mount(<SearchInput searchedList={mockArray} setSearchedList={mockFn} />);
        expect(wrapper.props().setSearchedList).toBeDefined();
        expect(wrapper.props().searchedList).toBeDefined();
    });

    test("renders with array of mocked countries", () => {
        const wrapper = mount(<SearchInput searchedList={mockCountryArray} setSearchedList={mockFn} />);
        expect(wrapper.props().setSearchedList).toBeDefined();
        expect(wrapper.props().searchedList).toEqual(mockCountryArray);
    });

    test("renders without searchedList", () => {
        const wrapper = mount(<SearchInput setSearchedList={mockFn} />);
        expect(wrapper.isEmptyRender()).toBe(false);
    });

    test("renders without setSearchedList", () => {
        const wrapper = mount(<SearchInput />);
        expect(wrapper.isEmptyRender()).toBe(false);
    });

});