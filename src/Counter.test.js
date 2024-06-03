import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0)
    })

    it("count should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementBtn = getByRole("button", { name: "incr" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);

        fireEvent.click(incrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
    })

    it("count should decrement by 1 if the decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
        const decrementBtn = getByRole("button", { name: "decr" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(1);

        fireEvent.click(decrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(0);
    })

    it("count should be 0 if the refresh button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
        const refreshBtn = getByRole("button", { name: "refresh" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(5);

        fireEvent.click(refreshBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(0);
    })

    it("count sign should be reversed if the swapSign button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
        const refreshmentBtn = getByRole("button", { name: "swapSign" });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(1);

        fireEvent.click(refreshmentBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(-1);
    })
})

