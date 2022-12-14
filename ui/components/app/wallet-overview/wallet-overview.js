import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const WalletOverview = ({ balance, className, icon, loading }) => {
  return (
    <div className={classnames('wallet-overview', className)}>
      <div className="wallet-overview__balance">
        {loading ? null : icon}
        {balance}
      </div>
    </div>
  );
};

WalletOverview.propTypes = {
  balance: PropTypes.element.isRequired,
  buttons: PropTypes.element.isRequired,
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  loading: PropTypes.bool,
};

WalletOverview.defaultProps = {
  className: undefined,
};

export default WalletOverview;
