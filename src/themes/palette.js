// project-imports
import ThemeOption from './theme';
import { ThemeMode } from 'config';
import { extendPaletteWithChannels, withAlpha } from 'utils/colorUtils';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

export function buildPalette(presetColor, contrast = false) {
  const lightPaletteColor = ThemeOption(presetColor, ThemeMode.LIGHT);
  const darkPaletteColor = ThemeOption(presetColor, ThemeMode.DARK);

  const commonColor = { common: { black: '#000', white: '#fff' } };

  const extendedLight = extendPaletteWithChannels(lightPaletteColor);
  const extendedDark = extendPaletteWithChannels(darkPaletteColor);
  const extendedCommon = extendPaletteWithChannels(commonColor);

  return {
    light: {
      mode: 'light',
      ...extendedCommon,
      ...extendedLight,
      text: {
        primary: extendedLight.secondary[800],
        secondary: extendedLight.secondary.main,
        disabled: extendedLight.secondary[400]
      },
      action: { disabled: extendedLight.secondary.light },
      divider: withAlpha(extendedLight.secondary.light, 0.65),
      background: {
        paper: commonColor.common.white,
        default: contrast ? commonColor.common.white : extendedLight.secondary.lighter
      }
    },
    dark: {
      mode: 'dark',
      ...extendedCommon,
      ...extendedDark,
      text: {
        primary: withAlpha(extendedDark.secondary.darker, 0.87),
        secondary: withAlpha(extendedDark.secondary.darker, 0.45),
        disabled: withAlpha(extendedDark.secondary.darker, 0.1)
      },
      action: { disabled: extendedDark.secondary.light },
      divider: withAlpha(extendedDark.secondary.darker, 0.05),
      background: {
        paper: extendedDark.secondary[100],
        default: extendedDark.secondary.lighter
      }
    }
  };
}
