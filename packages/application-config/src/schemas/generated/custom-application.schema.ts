/* eslint-disable prettier/prettier */ // This file was automatically generated by json-schema-to-typescript.
// DO NOT MODIFY IT BY HAND. Instead, modify the source custom-application.schema.json file and run the build-schema:custom-application npm script.

export type CspDirective = string[];

export interface JSONSchemaForCustomApplicationConfigurationFiles {
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#name
   */
  name: string;
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#description
   */
  description?: string;
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#entrypointuripath
   */
  entryPointUriPath: string;
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#cloudidentifier
   */
  cloudIdentifier: string;
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#mcapiurl
   */
  mcApiUrl?: string;
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#oauthscopes
   */
  oAuthScopes: {
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#oauthscopesview
     */
    view: string[];
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#oauthscopesmanage
     */
    manage: string[];
  };
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#additionaloauthscopes
   */
  additionalOAuthScopes?: {
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#additionaloauthscopesname
     */
    name: string;
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#additionaloauthscopesview
     */
    view: string[];
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#additionaloauthscopesmanage
     */
    manage: string[];
  }[];
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#env
   */
  env: {
    development: {
      /**
       * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#envdevelopmentinitialprojectkey
       */
      initialProjectKey: string;
      teamId?: string;
    };
    production: {
      /**
       * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#envproductionapplicationid
       */
      applicationId: string;
      /**
       * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#envproductionurl
       */
      url: string;
      /**
       * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#envproductioncdnurl
       */
      cdnUrl?: string;
    };
  };
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#additionalenv
   */
  additionalEnv?: {
    [k: string]: unknown;
  };
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#headers
   */
  headers?: {
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#headerscsp
     */
    csp?: {
      'connect-src': CspDirective;
      'font-src'?: CspDirective;
      'img-src'?: CspDirective;
      'script-src'?: CspDirective;
      'style-src'?: CspDirective;
      'frame-src'?: CspDirective;
    };
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#headerspermissionspolicies
     */
    permissionsPolicies?: {
      [k: string]: unknown;
    };
    /**
     * @deprecated
     */
    strictTransportSecurity?: ('includeSubDomains' | 'preload')[];
  };
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#icon
   */
  icon: string;
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#mainmenulink
   */
  mainMenuLink: {
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#mainmenulinkdefaultlabel
     */
    defaultLabel: string;
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#mainmenulinklabelalllocales
     */
    labelAllLocales: {
      locale: 'en' | 'de' | 'es' | 'fr-FR' | 'pt-BR';
      value: string;
    }[];
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#mainmenulinkpermissions
     */
    permissions: string[];
    [k: string]: unknown;
  };
  /**
   * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#submenulinks
   */
  submenuLinks: {
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#submenulinksuripath
     */
    uriPath: string;
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#submenulinksdefaultlabel
     */
    defaultLabel: string;
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#submenulinkslabelalllocales
     */
    labelAllLocales: {
      locale: 'en' | 'de' | 'es' | 'fr-FR' | 'pt-BR';
      value: string;
    }[];
    /**
     * See https://docs.commercetools.com/merchant-center-customizations/tooling-and-configuration/custom-application-config#submenulinkspermissions
     */
    permissions: string[];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
