import React from 'react';

import { renderWithProvider } from '../../../../test/jest';
import SlippageButtons from '.';

const createProps = (customProps = {}) => {
  return {
    onSelect: jest.fn(),
    maxAllowedSlippage: 15,
    currentSlippage: 3,
    smartTransactionsEnabled: false,
    ...customProps,
  };
};

describe('SlippageButtons', () => {
  it('renders the component with initial props', () => {
    const { getByText, queryByText } = renderWithProvider(
      <SlippageButtons {...createProps()} />,
    );
    expect(getByText('2%')).toBeInTheDocument();
    expect(getByText('3%')).toBeInTheDocument();
    expect(getByText('custom')).toBeInTheDocument();
    expect(getByText('Advanced options')).toBeInTheDocument();
    expect(
      document.querySelector('.slippage-buttons__header'),
    ).toMatchSnapshot();
    expect(
      document.querySelector('.slippage-buttons__button-group'),
    ).toMatchSnapshot();
    expect(queryByText('Smart transaction')).not.toBeInTheDocument();
  });

  it('renders the component with the smart transaction opt-in button available', () => {
    const { getByText } = renderWithProvider(
      <SlippageButtons {...createProps({ smartTransactionsEnabled: true })} />,
    );
    expect(getByText('2%')).toBeInTheDocument();
    expect(getByText('3%')).toBeInTheDocument();
    expect(getByText('custom')).toBeInTheDocument();
    expect(getByText('Advanced options')).toBeInTheDocument();
    expect(
      document.querySelector('.slippage-buttons__header'),
    ).toMatchSnapshot();
    expect(
      document.querySelector('.slippage-buttons__button-group'),
    ).toMatchSnapshot();
    expect(getByText('Smart transaction')).toBeInTheDocument();
  });
});
