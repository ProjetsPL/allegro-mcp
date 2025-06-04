// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Use this resource to create automatic pricing rule. This resource is rate
   * limited to 5 requests per second. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-utworzyc-wlasne-reguly-cenowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-create-own-pricing-rules" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const automaticPricingRule =
   *   await client.sale.priceAutomation.rules.create({
   *     name: 'My price on Allegro',
   *     type: 'FOLLOW_BY_ALLEGRO_MIN_PRICE',
   *   });
   * ```
   */
  create(body: RuleCreateParams, options?: RequestOptions): APIPromise<AutomaticPricingRule> {
    return this._client.post('/sale/price-automation/rules', {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
          Accept: 'application/vnd.allegro.public.v1+json',
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get automatic pricing rule by id. Rules with property
   * **default** set to **true** are default rules created by Allegro for each
   * merchant and cannot be modified. This resource is rate limited to 5 requests per
   * second. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-dostepne-reguly-cenowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-pricing-rules" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const automaticPricingRule =
   *   await client.sale.priceAutomation.rules.retrieve(
   *     '66466e2b07ba0029b829f08d',
   *   );
   * ```
   */
  retrieve(ruleID: string, options?: RequestOptions): APIPromise<AutomaticPricingRule> {
    return this._client.get(path`/sale/price-automation/rules/${ruleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to update automatic pricing rule. This resource is rate
   * limited to 5 requests per second. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-regule-cenowa" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-modify-a-pricing-rule" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const automaticPricingRule =
   *   await client.sale.priceAutomation.rules.update(
   *     '66466e2b07ba0029b829f08d',
   *     { name: 'My price on Allegro' },
   *   );
   * ```
   */
  update(ruleID: string, body: RuleUpdateParams, options?: RequestOptions): APIPromise<AutomaticPricingRule> {
    return this._client.put(path`/sale/price-automation/rules/${ruleID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
          Accept: 'application/vnd.allegro.public.v1+json',
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get automatic pricing rules. Rules with property
   * **default** set to **true** are default rules created by Allegro for each
   * merchant. This resource is rate limited to 5 requests per second. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-dostepne-reguly-cenowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-pricing-rules" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const rules =
   *   await client.sale.priceAutomation.rules.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<RuleListResponse> {
    return this._client.get('/sale/price-automation/rules', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete automatic pricing rule. This resource is rate
   * limited to 5 requests per second. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-usunac-regule-cenowa" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-delete-a-pricing-rule" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.priceAutomation.rules.delete(
   *   '66466e2b07ba0029b829f08d',
   * );
   * ```
   */
  delete(ruleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sale/price-automation/rules/${ruleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AutomaticPricingRule {
  /**
   * Identifier of a automatic pricing rule.
   */
  id: string;

  /**
   * Indicates whether a rule is default (true) or created by merchant (false).
   */
  default: boolean;

  /**
   * The rule name. Default rule names are automatically translated based on the
   * value provided in the the "Accept-Language" header.
   */
  name: string;

  /**
   * The rule type.
   *
   * - `EXCHANGE_RATE` - Calculates prices on additional marketplaces using the
   *   latest exchange rates and price from the offer base marketplace. <br />Is not
   *   available on base marketplace and business marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-przelicznik-cen-LR8WwMKyBf9" target="_blank">More
   *   information about EXCHANGE_RATE type</a>.
   * - `FOLLOW_BY_ALLEGRO_MIN_PRICE` - Calculates prices by following the lowest
   *   product price on Allegro for a given marketplace. <br />Is not available on
   *   business marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE"  target="_blank">More
   *   information about FOLLOW_BY_ALLEGRO_MIN_PRICE type</a>.
   * - `FOLLOW_BY_MARKET_MIN_PRICE` - Calculates prices by following the lowest
   *   product price on market for a given marketplace. <br />Is not available on
   *   business marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More
   *   information about FOLLOW_BY_MARKET_MIN_PRICE type</a>.
   * - `FOLLOW_BY_TOP_OFFER_PRICE` - Calculates prices by following the top offer
   *   price on market for a given marketplace. <br />Is not available on business
   *   marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More
   *   information about FOLLOW_BY_TOP_OFFER_PRICE type</a>.
   */
  type: AutomaticPricingRuleType;

  /**
   * The date the rule was last modified in ISO 8601 format.
   */
  updatedAt: string;

  configuration?: AutomaticPricingRuleConfiguration | null;
}

export type AutomaticPricingRuleConfiguration =
  | AutomaticPricingRuleConfiguration.AutomaticPricingRuleConfigurationChangeByAmount
  | AutomaticPricingRuleConfiguration.AutomaticPricingRuleConfigurationChangeByPercentage;

export namespace AutomaticPricingRuleConfiguration {
  export interface AutomaticPricingRuleConfigurationChangeByAmount {
    changeByAmount: AutomaticPricingRuleConfigurationChangeByAmount.ChangeByAmount;
  }

  export namespace AutomaticPricingRuleConfigurationChangeByAmount {
    export interface ChangeByAmount {
      operation: 'SUBTRACT' | 'ADD';

      values: Array<ChangeByAmount.Value>;
    }

    export namespace ChangeByAmount {
      export interface Value {
        amount: string;

        currency: string;
      }
    }
  }

  export interface AutomaticPricingRuleConfigurationChangeByPercentage {
    changeByPercentage: AutomaticPricingRuleConfigurationChangeByPercentage.ChangeByPercentage;
  }

  export namespace AutomaticPricingRuleConfigurationChangeByPercentage {
    export interface ChangeByPercentage {
      operation: 'SUBTRACT' | 'ADD';

      value: string;
    }
  }
}

/**
 * The rule type.
 *
 * - `EXCHANGE_RATE` - Calculates prices on additional marketplaces using the
 *   latest exchange rates and price from the offer base marketplace. <br />Is not
 *   available on base marketplace and business marketplaces.
 *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-przelicznik-cen-LR8WwMKyBf9" target="_blank">More
 *   information about EXCHANGE_RATE type</a>.
 * - `FOLLOW_BY_ALLEGRO_MIN_PRICE` - Calculates prices by following the lowest
 *   product price on Allegro for a given marketplace. <br />Is not available on
 *   business marketplaces.
 *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE"  target="_blank">More
 *   information about FOLLOW_BY_ALLEGRO_MIN_PRICE type</a>.
 * - `FOLLOW_BY_MARKET_MIN_PRICE` - Calculates prices by following the lowest
 *   product price on market for a given marketplace. <br />Is not available on
 *   business marketplaces.
 *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More
 *   information about FOLLOW_BY_MARKET_MIN_PRICE type</a>.
 * - `FOLLOW_BY_TOP_OFFER_PRICE` - Calculates prices by following the top offer
 *   price on market for a given marketplace. <br />Is not available on business
 *   marketplaces.
 *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More
 *   information about FOLLOW_BY_TOP_OFFER_PRICE type</a>.
 */
export type AutomaticPricingRuleType =
  | 'EXCHANGE_RATE'
  | 'FOLLOW_BY_ALLEGRO_MIN_PRICE'
  | 'FOLLOW_BY_MARKET_MIN_PRICE'
  | 'FOLLOW_BY_TOP_OFFER_PRICE';

export interface RuleListResponse {
  /**
   * List of rules.
   */
  rules: Array<AutomaticPricingRule>;
}

export interface RuleCreateParams {
  /**
   * The rule name. Default rule names are automatically translated based on the
   * value provided in the the "Accept-Language" header.
   */
  name: string;

  /**
   * The rule type.
   *
   * - `EXCHANGE_RATE` - Calculates prices on additional marketplaces using the
   *   latest exchange rates and price from the offer base marketplace. <br />Is not
   *   available on base marketplace and business marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-przelicznik-cen-LR8WwMKyBf9" target="_blank">More
   *   information about EXCHANGE_RATE type</a>.
   * - `FOLLOW_BY_ALLEGRO_MIN_PRICE` - Calculates prices by following the lowest
   *   product price on Allegro for a given marketplace. <br />Is not available on
   *   business marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE"  target="_blank">More
   *   information about FOLLOW_BY_ALLEGRO_MIN_PRICE type</a>.
   * - `FOLLOW_BY_MARKET_MIN_PRICE` - Calculates prices by following the lowest
   *   product price on market for a given marketplace. <br />Is not available on
   *   business marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More
   *   information about FOLLOW_BY_MARKET_MIN_PRICE type</a>.
   * - `FOLLOW_BY_TOP_OFFER_PRICE` - Calculates prices by following the top offer
   *   price on market for a given marketplace. <br />Is not available on business
   *   marketplaces.
   *   <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More
   *   information about FOLLOW_BY_TOP_OFFER_PRICE type</a>.
   */
  type: AutomaticPricingRuleType;

  configuration?: AutomaticPricingRuleConfiguration | null;
}

export interface RuleUpdateParams {
  /**
   * The rule name. Default rule names are automatically translated based on the
   * value provided in the the "Accept-Language" header.
   */
  name: string;

  configuration?: AutomaticPricingRuleConfiguration | null;
}

export declare namespace Rules {
  export {
    type AutomaticPricingRule as AutomaticPricingRule,
    type AutomaticPricingRuleConfiguration as AutomaticPricingRuleConfiguration,
    type AutomaticPricingRuleType as AutomaticPricingRuleType,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
  };
}
