import {render, screen} from "@testing-library/react";
import Hero from "./Hero";

describe('hero', () => {
    it('renders correctly', () => {
        render(<Hero/>);
        expect(screen.getByRole('heading', {  name: /welcome/i})).toBeInTheDocument();
        expect(screen.getByText(/to donut monsters vegan food/i)).toBeInTheDocument();
        expect(screen.getByRole('img', {  name: /donut monsters/i})).toBeInTheDocument();
    })
})