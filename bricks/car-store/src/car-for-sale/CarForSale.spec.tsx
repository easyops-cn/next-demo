import React from "react";
import { mount, shallow } from "enzyme";
import { CarForSale } from "./CarForSale";

const mockPauseAnimations = (SVGSVGElement.prototype.pauseAnimations = jest.fn());
const mockUnpauseAnimations = (SVGSVGElement.prototype.unpauseAnimations = jest.fn());

describe("CarForSale", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set car paint", () => {
    const wrapper = shallow(<CarForSale paint="red" />);
    expect(wrapper.find("div").prop("style").color).toBe("red");
  });

  it("should stop and restart running car", () => {
    const wrapper = mount(<CarForSale running />);
    expect(mockUnpauseAnimations).toBeCalledTimes(1);

    wrapper.setProps({
      running: false,
    });
    expect(mockPauseAnimations).toBeCalledTimes(1);

    wrapper.setProps({
      running: true,
    });
    expect(mockUnpauseAnimations).toBeCalledTimes(2);
  });
});
