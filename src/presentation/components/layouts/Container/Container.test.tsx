import {render, screen} from '@testing-library/react';
import Container from './Container';

describe('Testing Container Component', () => {
  it('should render the Container component with children', () => {
    render(
      <Container>
        <div>Test Child</div>
      </Container>
    );

    const childElement = screen.getByText('Test Child');
    expect(childElement).toBeInTheDocument();
  });

  it('should apply the correct className', () => {
    render(<Container className="test-class">Content</Container>);

    const containerElement = screen.getByText('Content');
    expect(containerElement).toHaveClass('test-class');
  });
});