import {fireEvent, render, screen} from "@testing-library/react";
import Image from "./Image";

describe('image', () => {
    // TODO: fix visibility for image to make it accessible
    xit('shows correctly the provided image', () => {
        render(<Image altText="Logo 512" imgSrc="logo512.png"/>);
        expect(screen.getByRole('img', {name: /logo 512/i})).toHaveAttribute('src', 'logo512.png');
    });

    xit('shows default image on error', async () => {
        render(<Image altText="Logo 512" imgSrc=""/>);
        expect(screen.getByRole('img', {  name: /donut monster taken/i})).toBeInTheDocument();
    });
});