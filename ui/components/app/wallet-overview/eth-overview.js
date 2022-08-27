import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import Identicon from '../../ui/identicon';
import { I18nContext } from '../../../contexts/i18n';
import Tooltip from '../../ui/tooltip';
import UserPreferencedCurrencyDisplay from '../user-preferenced-currency-display';
import { PRIMARY, SECONDARY } from '../../../helpers/constants/common';
import {
  isBalanceCached,
  getShouldShowFiat,
  getNativeCurrencyImage,
  getSelectedAccountCachedBalance,
} from '../../../selectors/selectors';
import Spinner from '../../ui/spinner';
import WalletOverview from './wallet-overview';

const EthOverview = ({ className }) => {
  const t = useContext(I18nContext);
  const balanceIsCached = useSelector(isBalanceCached);
  const showFiat = useSelector(getShouldShowFiat);
  const balance = useSelector(getSelectedAccountCachedBalance);
  const primaryTokenImage = useSelector(getNativeCurrencyImage);

  return (
    <WalletOverview
      loading={!balance}
      balance={
        <Tooltip
          position="top"
          title={t('balanceOutdated')}
          disabled={!balanceIsCached}
        >
          <div className="eth-overview__balance">
            <div className="eth-overview__primary-container">
              {balance ? (
                <UserPreferencedCurrencyDisplay
                  className={classnames('eth-overview__primary-balance', {
                    'eth-overview__cached-balance': balanceIsCached,
                  })}
                  data-testid="eth-overview__primary-currency"
                  value={balance}
                  type={PRIMARY}
                  ethNumberOfDecimals={4}
                  hideTitle
                />
              ) : (
                <Spinner
                  color="var(--color-secondary-default)"
                  className="loading-overlay__spinner"
                />
              )}
              {balanceIsCached ? (
                <span className="eth-overview__cached-star">*</span>
              ) : null}
            </div>
            {showFiat && balance && (
              <UserPreferencedCurrencyDisplay
                className={classnames({
                  'eth-overview__cached-secondary-balance': balanceIsCached,
                  'eth-overview__secondary-balance': !balanceIsCached,
                })}
                data-testid="eth-overview__secondary-currency"
                value={balance}
                type={SECONDARY}
                ethNumberOfDecimals={4}
                hideTitle
              />
            )}
          </div>
        </Tooltip>
      }
      className={className}
      icon={<Identicon diameter={32} image={primaryTokenImage} imageBorder />}
    />
  );
};

EthOverview.propTypes = {
  className: PropTypes.string,
};

EthOverview.defaultProps = {
  className: undefined,
};

export default EthOverview;
