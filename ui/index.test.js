import { setupLocale } from '.';

const enMessages = {
  troubleStarting: {
    message:
      'DexWallet had trouble starting. This error could be intermittent, so try restarting the extension.',
  },
  restartDexwallet: {
    message: 'Restart DexWallet',
  },
  stillGettingMessage: {
    message: 'Still getting this message?',
  },
  sendBugReport: {
    message: 'Send us a bug report.',
  },
};

const esMessages = {
  troubleStarting: {
    message:
      'DexWallet tuvo problemas para iniciarse. Este error podría ser intermitente, así que intente reiniciar la extensión.',
  },
  restartDexwallet: {
    message: 'Reiniciar metamáscara',
  },
  sendBugReport: {
    message: 'Envíenos un informe de errores.',
  },
};

jest.mock('./helpers/utils/i18n-helper', () => ({
  fetchLocale: jest.fn((locale) => (locale === 'en' ? enMessages : esMessages)),
  loadRelativeTimeFormatLocaleData: jest.fn(),
}));

describe('Index Tests', () => {
  it('should get locale messages by calling setupLocale', async () => {
    let result = await setupLocale('en');
    const { currentLocaleMessages: clm, enLocaleMessages: elm } = result;
    expect(clm).toBeDefined();
    expect(elm).toBeDefined();
    expect(clm.troubleStarting).toStrictEqual(enMessages.troubleStarting);

    expect(clm.restartDexwallet).toStrictEqual(enMessages.restartDexwallet);

    expect(clm.stillGettingMessage).toStrictEqual(
      enMessages.stillGettingMessage,
    );

    expect(clm.sendBugReport).toStrictEqual(enMessages.sendBugReport);

    result = await setupLocale('es');

    const { currentLocaleMessages: clm2, enLocaleMessages: elm2 } = result;
    expect(clm2).toBeDefined();
    expect(elm2).toBeDefined();

    expect(clm2.troubleStarting).toStrictEqual(esMessages.troubleStarting);

    expect(clm2.restartDexwallet).toStrictEqual(esMessages.restartDexwallet);

    expect(clm2.stillGettingMessage).toBeUndefined();
    expect(elm2.stillGettingMessage).toStrictEqual(
      enMessages.stillGettingMessage,
    );

    expect(clm2.sendBugReport).toStrictEqual(esMessages.sendBugReport);
  });
});
