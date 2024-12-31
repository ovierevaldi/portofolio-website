import { render, screen } from '@testing-library/react';
import {describe , it, expect} from 'vitest'
import Footer from './Footer';

describe('Footer Component', () => {
  it('Should Render Footer Component', () => {
    render(<Footer />);

    expect(screen.getByText('Made with')).toBeInTheDocument();

    expect(screen.getByText('revaldiovie3@gmail.com')).toBeInTheDocument();
  });
});
