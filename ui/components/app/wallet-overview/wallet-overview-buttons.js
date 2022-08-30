import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const WalletOverviewButtons = ({ buttons, className }) => {
  return (
    <div className={classnames('wallet-overview', className)}>
      <div className="wallet-overview__buttons">{buttons}</div>
    </div>
  );
};

WalletOverviewButtons.propTypes = {
  balance: PropTypes.element.isRequired,
  buttons: PropTypes.element.isRequired,
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  loading: PropTypes.bool,
};

WalletOverviewButtons.defaultProps = {
  className: undefined,
};

export default WalletOverviewButtons;
