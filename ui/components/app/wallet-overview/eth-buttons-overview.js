import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import TransactionList from '../../../components/app/transaction-list';

import { I18nContext } from '../../../contexts/i18n';
import {
  SEND_ROUTE,
  BUILD_QUOTE_ROUTE,
  TRANSACTION_LIST_ROUTE,
  ASSETLIST_ROUTE,
} from '../../../helpers/constants/routes';
import Tooltip from '../../ui/tooltip';
import { showModal } from '../../../store/actions';
import {
  getCurrentKeyring,
  getSwapsDefaultToken,
  getIsSwapsChain,
  getIsBuyableChain,
  getNativeCurrencyImage,
} from '../../../selectors/selectors';
import SwapIcon from '../../ui/icon/swap-icon.component';

import BuyIcon from '../../ui/icon/overview-buy-icon.component';
import AssetIcon from '../../ui/icon/overview-asset-icon.component';
import ActivityIcon from '../../ui/icon/overview-activity-icon.component';
import ReceiveIcon from '../../ui/icon/overview-receive-icon.component';
import SendIcon from '../../ui/icon/overview-send-icon.component';
import { setSwapsFromToken } from '../../../ducks/swaps/swaps';
import IconButton from '../../ui/icon-button';
import { isHardwareKeyring } from '../../../helpers/utils/hardware';
import { MetaMetricsContext } from '../../../contexts/metametrics';
import { EVENT, EVENT_NAMES } from '../../../../shared/constants/metametrics';
import { startNewDraftTransaction } from '../../../ducks/send';
import { ASSET_TYPES } from '../../../../shared/constants/transaction';
import WalletOverview from './wallet-overview';

const EthButtonsOverview = ({ className }) => {
  const dispatch = useDispatch();
  const t = useContext(I18nContext);
  const trackEvent = useContext(MetaMetricsContext);
  const history = useHistory();
  const keyring = useSelector(getCurrentKeyring);
  const usingHardwareWallet = isHardwareKeyring(keyring?.type);
  const isSwapsChain = useSelector(getIsSwapsChain);
  const isBuyableChain = useSelector(getIsBuyableChain);
  const defaultSwapsToken = useSelector(getSwapsDefaultToken);

  return (
    <WalletOverview
      buttons={
        <>
          <IconButton
            className="eth-overview__button"
            Icon={ReceiveIcon}
            disabled={!isBuyableChain}
            label={t('receive')}
            onClick={() => {
              trackEvent({
                event: EVENT_NAMES.NAV_ACCOUNT_DETAILS_OPENED,
                category: EVENT.CATEGORIES.NAVIGATION,
                properties: {
                  location: 'Account Options',
                  text: 'Buy',
                },
              });
              dispatch(showModal({ name: 'ACCOUNT_DETAILS' }));
            }}
          />
          {/* <IconButton
            className="eth-overview__button"
            Icon={BuyIcon}
            disabled={!isBuyableChain}
            label={t('buy')}
            onClick={() => {
              trackEvent({
                event: EVENT_NAMES.NAV_BUY_BUTTON_CLICKED,
                category: EVENT.CATEGORIES.NAVIGATION,
                properties: {
                  location: 'Home',
                  text: 'Buy',
                },
              });
              dispatch(showModal({ name: 'DEPOSIT_ETHER' }));
            }}
          /> */}
          <IconButton
            className="eth-overview__button"
            data-testid="eth-overview-send"
            Icon={SendIcon}
            label={t('send')}
            onClick={() => {
              trackEvent({
                event: EVENT_NAMES.NAV_SEND_BUTTON_CLICKED,
                category: EVENT.CATEGORIES.NAVIGATION,
                properties: {
                  token_symbol: 'ETH',
                  location: 'Home',
                  text: 'Send',
                },
              });
              dispatch(
                startNewDraftTransaction({ type: ASSET_TYPES.NATIVE }),
              ).then(() => {
                history.push(SEND_ROUTE);
              });
            }}
          />
          <IconButton
            className="eth-overview__button"
            disabled={!isSwapsChain}
            Icon={SwapIcon}
            onClick={() => {
              if (isSwapsChain) {
                trackEvent({
                  event: EVENT_NAMES.NAV_SWAP_BUTTON_CLICKED,
                  category: EVENT.CATEGORIES.SWAPS,
                  properties: {
                    token_symbol: 'ETH',
                    location: EVENT.SOURCE.SWAPS.MAIN_VIEW,
                    text: 'Swap',
                  },
                });
                dispatch(setSwapsFromToken(defaultSwapsToken));
                if (usingHardwareWallet) {
                  global.platform.openExtensionInBrowser(BUILD_QUOTE_ROUTE);
                } else {
                  history.push(BUILD_QUOTE_ROUTE);
                }
              }
            }}
            label={t('swap')}
            tooltipRender={(contents) => (
              <Tooltip
                title={t('currentlyUnavailable')}
                position="bottom"
                disabled={isSwapsChain}
              >
                {contents}
              </Tooltip>
            )}
          />
          <IconButton
            className="eth-overview__button"
            data-testid="eth-overview-send"
            Icon={AssetIcon}
            label={t('assets')}
            onClick={() => {
              history.push(ASSETLIST_ROUTE);
            }}
          />
          <IconButton
            className="eth-overview__button"
            data-testid="eth-overview-send"
            Icon={ActivityIcon}
            label={t('activity')}
            onClick={() => {
              history.push(TRANSACTION_LIST_ROUTE);
            }}
          />
        </>
      }
      className={className}
    />
  );
};

EthButtonsOverview.propTypes = {
  className: PropTypes.string,
};

EthButtonsOverview.defaultProps = {
  className: undefined,
};

export default EthButtonsOverview;
