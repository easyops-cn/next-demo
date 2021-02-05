import React from "react";
import { shallow } from "enzyme";
import { RunningCar } from "./RunningCar";

describe("RunningCar", () => {
  it("should work", () => {
    const wrapper = shallow(<RunningCar />);
    expect(wrapper.find("svgr-mock").length).toBe(1);
  });

  it("should set car print", () => {
    const wrapper = shallow(<RunningCar print="red" />);
    expect(wrapper.find("div").prop("style").color).toBe("red");
  });
});
