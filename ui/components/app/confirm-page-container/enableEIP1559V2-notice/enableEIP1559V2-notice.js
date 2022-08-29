import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Box from '../../../ui/box';
import Dialog from '../../../ui/dialog';
import Typography from '../../../ui/typography/typography';
import {
  COLORS,
  TYPOGRAPHY,
  TEXT_ALIGN,
  FONT_WEIGHT,
  DISPLAY,
} from '../../../../helpers/constants/design-system';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import Button from '../../../ui/button';
import { EXPERIMENTAL_ROUTE } from '../../../../helpers/constants/routes';
import { setEnableEIP1559V2NoticeDismissed } from '../../../../store/actions';
import { getEnableEIP1559V2NoticeDismissed } from '../../../../ducks/metamask/metamask';
import { getEIP1559V2Enabled } from '../../../../selectors';

export default function EnableEIP1559V2Notice({ isFirstAlert }) {
  const t = useI18nContext();
  const history = useHistory();
  const enableEIP1559V2NoticeDismissed = useSelector(
    getEnableEIP1559V2NoticeDismissed,
  );
  const eip1559V2Enabled = useSelector(getEIP1559V2Enabled);

  if (eip1559V2Enabled || enableEIP1559V2NoticeDismissed) {
    return null;
  }

  return <div> </div>;
}

EnableEIP1559V2Notice.propTypes = {
  isFirstAlert: PropTypes.bool,
};
