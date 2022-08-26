import React from 'react';
import { useI18nContext } from '../../../hooks/useI18nContext';

const BetaWelcomeFooter = () => {
  const t = useI18nContext();

  return (
    <>
      <div className="welcome-page__header">{t('betaWelcome')}</div>
      <div className="welcome-page__description">
        <p>{t('betaDexwalletDescription')}</p>
        <p>
          {t('betaDexwalletDescriptionExplanation', [
            <a href="https://dexwallet.com/terms.html" key="terms-link">
              {t('betaDexwalletDescriptionExplanationTermsLinkText')}
            </a>,
            <a href="https://dexwallet.com/beta-terms.html" key="beta-terms-link">
              {t('betaDexwalletDescriptionExplanationBetaTermsLinkText')}
            </a>,
          ])}
        </p>
      </div>
    </>
  );
};

export default BetaWelcomeFooter;
