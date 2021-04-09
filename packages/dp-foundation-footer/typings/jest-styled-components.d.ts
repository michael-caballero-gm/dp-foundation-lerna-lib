declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument: import('jest-styled-components').jest.Matchers<R>['toBeInTheDocument'];
    toBeVisible: import('jest-styled-components').jest.Matchers<R>['toBeVisible'];
    toHaveAttribute: import('jest-styled-components').jest.Matchers<R>['toHaveAttribute'];
    toHaveFocus: import('jest-styled-components').jest.Matchers<R>['toHaveFocus'];
    toHaveStyle: import('jest-styled-components').jest.Matchers<R>['toHaveStyle'];
    toHaveStyleRule: import('jest-styled-components').jest.Matchers<R>['toHaveStyleRule'];
  }
}
