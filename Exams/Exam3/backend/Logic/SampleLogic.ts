import { SimpleModel } from "../Models/SimpleModel";

const MockData = () => {
  let mockData: SimpleModel[] = [];
  mockData.push(new SimpleModel(1, "OK"));
  mockData.push(new SimpleModel(2, "BAD"));

  return MockData;
};

export { MockData };
