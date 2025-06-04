// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PromotionsAPI from './promotions';
import {
  Benefit,
  PromotionCreateParams,
  PromotionListParams,
  PromotionListResponse,
  PromotionUpdateParams,
  Promotions,
  SellerCreateRebateRequest,
  SellerRebate,
  SellerRebateOfferCriterion,
} from './promotions';

export class Loyalty extends APIResource {
  promotions: PromotionsAPI.Promotions = new PromotionsAPI.Promotions(this._client);
}

Loyalty.Promotions = Promotions;

export declare namespace Loyalty {
  export {
    Promotions as Promotions,
    type Benefit as Benefit,
    type SellerCreateRebateRequest as SellerCreateRebateRequest,
    type SellerRebate as SellerRebate,
    type SellerRebateOfferCriterion as SellerRebateOfferCriterion,
    type PromotionListResponse as PromotionListResponse,
    type PromotionCreateParams as PromotionCreateParams,
    type PromotionUpdateParams as PromotionUpdateParams,
    type PromotionListParams as PromotionListParams,
  };
}
