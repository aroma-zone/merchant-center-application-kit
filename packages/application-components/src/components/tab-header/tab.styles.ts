import {
  css,
  type SerializedStyles,
  type Interpolation,
  type Theme,
} from '@emotion/react';
import { designTokens as uiKitDesignTokens } from '@commercetools-uikit/design-system';
import { designTokens as appKitDesignTokens } from '../../theming';

const getBottomBorderStyles = (background: string): SerializedStyles => css`
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${appKitDesignTokens.heightForTab};
    border-radius: ${uiKitDesignTokens.borderRadius2};
    background-color: ${background};
    transition: background-color ${uiKitDesignTokens.transitionEaseinout150Ms};
  }
`;

export const getLinkStyles = (
  isActive: boolean,
  isDisabled: boolean
): Interpolation<Theme> => [
  css`
    font-size: ${uiKitDesignTokens.fontSizeDefault};
    padding: ${uiKitDesignTokens.spacingS} ${uiKitDesignTokens.spacingM};
    position: relative;
    text-align: center;
    display: inline-block;
    color: inherit;
    text-decoration: inherit;

    &:first-of-type {
      padding-left: ${appKitDesignTokens.paddingLeftForTabAsFirst};
    }

    ${getBottomBorderStyles('transparent')}
  `,
  isActive &&
    css`
      ${getBottomBorderStyles(uiKitDesignTokens.colorPrimary)}
      & h4 {
        color: ${uiKitDesignTokens.colorPrimary} !important;
      }
    `,
  isDisabled &&
    css`
      &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.5;

        &:active {
          pointer-events: none;
        }
      }
    `,
  !isActive &&
    !isDisabled &&
    css`
      :hover,
      :focus,
      :active {
        & h4 {
          color: ${uiKitDesignTokens.colorPrimary} !important;
        }
      }
    `,
];
