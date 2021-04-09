import 'jest-styled-components';
import { render, cleanup } from '@utils/testUtils/testUtils';
import { Footer } from './Footer.component';

afterEach(cleanup);
describe('Footer', () => {

  it('should render correctly', () => {
    const { container, debug } = render(<Footer />);
    debug();
    expect(container).toMatchSnapshot();
  });
});
