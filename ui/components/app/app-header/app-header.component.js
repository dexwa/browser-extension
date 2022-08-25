import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Identicon from '../../ui/identicon';
import { EVENT, EVENT_NAMES } from '../../../../shared/constants/metametrics';
import NetworkDisplay from '../network-display';

export default class AppHeader extends PureComponent {
  static propTypes = {
    networkDropdownOpen: PropTypes.bool,
    showNetworkDropdown: PropTypes.func,
    hideNetworkDropdown: PropTypes.func,
    toggleAccountMenu: PropTypes.func,
    selectedAddress: PropTypes.string,
    isUnlocked: PropTypes.bool,
    hideNetworkIndicator: PropTypes.bool,
    disabled: PropTypes.bool,
    disableNetworkIndicator: PropTypes.bool,
    isAccountMenuOpen: PropTypes.bool,
    ///: BEGIN:ONLY_INCLUDE_IN(flask)
    unreadNotificationsCount: PropTypes.number,
    ///: END:ONLY_INCLUDE_IN
  };

  static contextTypes = {
    t: PropTypes.func,
    trackEvent: PropTypes.func,
  };

  handleNetworkIndicatorClick(event) {
    event.preventDefault();
    event.stopPropagation();

    const {
      networkDropdownOpen,
      showNetworkDropdown,
      hideNetworkDropdown,
      disabled,
      disableNetworkIndicator,
    } = this.props;

    if (disabled || disableNetworkIndicator) {
      return;
    }

    if (networkDropdownOpen === false) {
      this.context.trackEvent({
        category: EVENT.CATEGORIES.NAVIGATION,
        event: EVENT_NAMES.NAV_NETWORK_MENU_OPENED,
        properties: {},
      });
      showNetworkDropdown();
    } else {
      hideNetworkDropdown();
    }
  }

  renderAccountMenu() {
    const {
      isUnlocked,
      toggleAccountMenu,
      selectedAddress,
      disabled,
      isAccountMenuOpen,
      ///: BEGIN:ONLY_INCLUDE_IN(flask)
      unreadNotificationsCount,
      ///: END:ONLY_INCLUDE_IN
    } = this.props;

    return (
      isUnlocked && (
        <button
          className={classnames('account-menu__icon', {
            'account-menu__icon--disabled': disabled,
          })}
          onClick={() => {
            if (!disabled) {
              !isAccountMenuOpen &&
                this.context.trackEvent({
                  category: EVENT.CATEGORIES.NAVIGATION,
                  event: EVENT_NAMES.NAV_MAIN_MENU_OPENED,
                  properties: {},
                });
              toggleAccountMenu();
            }
          }}
        >
          <Identicon address={selectedAddress} diameter={32} addBorder />
          {
            ///: BEGIN:ONLY_INCLUDE_IN(flask)
            unreadNotificationsCount > 0 && (
              <div className="account-menu__icon__notification-count">
                {unreadNotificationsCount}
              </div>
            )
            ///: END:ONLY_INCLUDE_IN
          }
        </button>
      )
    );
  }

  render() {
    const {
      hideNetworkIndicator,
      disableNetworkIndicator,
      disabled,
    } = this.props;

    return (
      <div className="app-header">
        <div className="app-header__contents">
        {this.renderAccountMenu()}
          <div className="app-header__account-menu-container">
            {!hideNetworkIndicator && (
              <div className="app-header__network-component-wrapper">
                <NetworkDisplay
                  onClick={(event) => this.handleNetworkIndicatorClick(event)}
                  disabled={disabled || disableNetworkIndicator}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
