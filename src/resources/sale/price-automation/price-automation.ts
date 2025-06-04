// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OffersAPI from './offers';
import { AutomaticPricingOfferRuleConfiguration, OfferRetrieveRulesResponse, Offers } from './offers';
import * as RulesAPI from './rules';
import {
  AutomaticPricingRule,
  AutomaticPricingRuleConfiguration,
  AutomaticPricingRuleType,
  RuleCreateParams,
  RuleListResponse,
  RuleUpdateParams,
  Rules,
} from './rules';

export class PriceAutomation extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);
}

PriceAutomation.Rules = Rules;
PriceAutomation.Offers = Offers;

export declare namespace PriceAutomation {
  export {
    Rules as Rules,
    type AutomaticPricingRule as AutomaticPricingRule,
    type AutomaticPricingRuleConfiguration as AutomaticPricingRuleConfiguration,
    type AutomaticPricingRuleType as AutomaticPricingRuleType,
    type RuleListResponse as RuleListResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
  };

  export {
    Offers as Offers,
    type AutomaticPricingOfferRuleConfiguration as AutomaticPricingOfferRuleConfiguration,
    type OfferRetrieveRulesResponse as OfferRetrieveRulesResponse,
  };
}
