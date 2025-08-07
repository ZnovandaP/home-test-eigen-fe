import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import AppShell from './AppShell';

describe('Testing AppShell Component', () => {
  it('should render the AppShell component', () => {
    render(<AppShell />); 

    const appShellElement = screen.getByText('News Portal | Home Test Eigen');
    expect(appShellElement).toBeInTheDocument();
  });
});