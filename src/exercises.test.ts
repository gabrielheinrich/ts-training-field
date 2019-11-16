import { getFirstValue } from "./exercises";

describe("Very Easy exercises from edabit", () => {
   test("getFirstValue", () => {
      expect(getFirstValue([1, 2, 3])).toBe(1);
      expect(getFirstValue([80, 5, 100])).toBe(80);
      expect(getFirstValue([-500, 0, 50])).toBe(-500);
      expect(getFirstValue(["Hello", 0, 50])).toBe("Hello");
   });
});
