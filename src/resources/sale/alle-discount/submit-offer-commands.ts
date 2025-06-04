// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubmitOfferCommandsAPI from './submit-offer-commands';
import * as ProductOffersAPI from '../product-offers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SubmitOfferCommands extends APIResource {
  /**
   * Use this resource to create a command for submitting an offer. Offer will be
   * submitted to the AlleDiscount campaign only if command is processed
   * successfully. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-zglosic-oferte-do-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-submit-an-offer-to-a-campaign" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const submitOfferCommand =
   *   await client.sale.alleDiscount.submitOfferCommands.create(
   *     {
   *       commandId: 'c1b3f63d-d293-4333-911d-a0c1053e2c81',
   *       input: {
   *         offer: { id: '10394822344' },
   *         campaign: { id: 'ALLEOBNIZKA_20230209' },
   *         proposedPrice: {
   *           amount: '100.00',
   *           currency: 'PLN',
   *         },
   *       },
   *     },
   *   );
   * ```
   */
  create(
    body: SubmitOfferCommandCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubmitOfferCommandCreateResponse> {
    return this._client.post('/sale/alle-discount/submit-offer-commands', {
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
   * Use this resource to get information about the submit offer command execution
   * status. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-sprawdzic-status-zgloszenia-oferty-do-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-check-the-status-of-an-offer-submission-to-a-campaign" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const submitOfferCommand =
   *   await client.sale.alleDiscount.submitOfferCommands.retrieve(
   *     'commandId',
   *   );
   * ```
   */
  retrieve(commandID: string, options?: RequestOptions): APIPromise<SubmitOfferCommandRetrieveResponse> {
    return this._client.get(path`/sale/alle-discount/submit-offer-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface ErrorsHolder {
  /**
   * The list of all the error objects explaining the error.
   */
  errors?: Array<ProductOffersAPI.Error>;
}

export interface SubmitOfferCommandCreateResponse {
  /**
   * Provided UUID of the submit offer command or generated UUID.
   */
  id?: string;

  /**
   * Provided submit offer command input data.
   */
  input?: SubmitOfferCommandCreateResponse.Input;

  /**
   * Submit offer command output data.
   */
  output?: SubmitOfferCommandCreateResponse.Output;
}

export namespace SubmitOfferCommandCreateResponse {
  /**
   * Provided submit offer command input data.
   */
  export interface Input {
    /**
     * Campaign data.
     */
    campaign?: Input.Campaign;

    /**
     * Offer data.
     */
    offer?: Input.Offer;

    /**
     * The price you agreed to lower to for the offer.
     */
    proposedPrice?: Input.ProposedPrice;
  }

  export namespace Input {
    /**
     * Campaign data.
     */
    export interface Campaign {
      /**
       * The id of the campaign.
       */
      id?: string;
    }

    /**
     * Offer data.
     */
    export interface Offer {
      /**
       * The id of the offer.
       */
      id?: string;
    }

    /**
     * The price you agreed to lower to for the offer.
     */
    export interface ProposedPrice {
      /**
       * Amount of the price.
       */
      amount?: string;

      /**
       * Currency of the price.
       */
      currency?: string;
    }
  }

  /**
   * Submit offer command output data.
   */
  export interface Output {
    /**
     * Creation date of the command. ISO 8601 format.
     */
    createdAt?: string;

    /**
     * Execution status of the command.
     */
    status?: 'NEW';

    /**
     * Update date of the command. ISO 8601 format.
     */
    updatedAt?: string;
  }
}

export interface SubmitOfferCommandRetrieveResponse {
  /**
   * The id of the command.
   */
  id?: string;

  /**
   * Provided submit offer command input data.
   */
  input?: SubmitOfferCommandRetrieveResponse.Input;

  /**
   * Submit offer command output data.
   */
  output?: SubmitOfferCommandRetrieveResponse.Output;
}

export namespace SubmitOfferCommandRetrieveResponse {
  /**
   * Provided submit offer command input data.
   */
  export interface Input {
    /**
     * Campaign data.
     */
    campaign?: Input.Campaign;

    /**
     * Offer data.
     */
    offer?: Input.Offer;

    /**
     * The price you agreed to lower to for the offer.
     */
    proposedPrice?: Input.ProposedPrice;
  }

  export namespace Input {
    /**
     * Campaign data.
     */
    export interface Campaign {
      /**
       * The id of the campaign.
       */
      id?: string;
    }

    /**
     * Offer data.
     */
    export interface Offer {
      /**
       * The id of the offer.
       */
      id?: string;
    }

    /**
     * The price you agreed to lower to for the offer.
     */
    export interface ProposedPrice {
      /**
       * Amount of the price.
       */
      amount?: string;

      /**
       * Currency of the price.
       */
      currency?: string;
    }
  }

  /**
   * Submit offer command output data.
   */
  export interface Output {
    /**
     * Command creation date. ISO 8601 format.
     */
    createdAt?: string;

    errors?: Array<SubmitOfferCommandsAPI.ErrorsHolder>;

    /**
     * Object containing info about created participation in AlleDiscount, contains the
     * id of the created participation.
     */
    newOfferParticipation?: Output.NewOfferParticipation | null;

    /**
     * Status field possible values:
     *
     * - NEW - command processing has not started.
     * - IN_PROGRESS - command is being processed.
     * - FAILED - processing of the command failed. Offer will not participate in
     *   AlleDiscount.
     * - SUCCESSFUL - processing of the command was successful. New participation was
     *   created but in some cases it still may be denied. To make sure that the offer
     *   is participating in AlleDiscount, check the participation status in 'GET
     *   /sale/alle-discount/{campaignId}/submitted-offers`.
     */
    status?: 'NEW' | 'IN_PROGRESS' | 'SUCCESSFUL' | 'FAILED';

    /**
     * Command update date. ISO 8601 format.
     */
    updatedAt?: string;
  }

  export namespace Output {
    /**
     * Object containing info about created participation in AlleDiscount, contains the
     * id of the created participation.
     */
    export interface NewOfferParticipation {
      /**
       * The id of the participation created by submit offer command.
       */
      participationId?: string;
    }
  }
}

export interface SubmitOfferCommandCreateParams {
  /**
   * The command UUID. If empty, system generates new one.
   */
  commandId?: string | null;

  /**
   * Command input.
   */
  input?: SubmitOfferCommandCreateParams.Input;
}

export namespace SubmitOfferCommandCreateParams {
  /**
   * Command input.
   */
  export interface Input {
    /**
     * Data of AlleDiscount campaign you want to submit your offer to.
     */
    campaign?: Input.Campaign;

    /**
     * Data of the offer you want to submit to the AlleDiscount campaign.
     */
    offer?: Input.Offer;

    /**
     * The price you agree to lower to for the offer. Must be equal or lower than
     * requiredMerchantPrice returned in
     * `/sale/alle-discount/{campaignId}/eligible-offers` endpoint.
     */
    proposedPrice?: Input.ProposedPrice;
  }

  export namespace Input {
    /**
     * Data of AlleDiscount campaign you want to submit your offer to.
     */
    export interface Campaign {
      /**
       * The id of the AlleDiscount campaign.
       */
      id?: string;
    }

    /**
     * Data of the offer you want to submit to the AlleDiscount campaign.
     */
    export interface Offer {
      /**
       * The id of the offer.
       */
      id?: string;
    }

    /**
     * The price you agree to lower to for the offer. Must be equal or lower than
     * requiredMerchantPrice returned in
     * `/sale/alle-discount/{campaignId}/eligible-offers` endpoint.
     */
    export interface ProposedPrice {
      /**
       * Amount of the proposed price.
       */
      amount?: string;

      /**
       * Currency of the proposed price.
       */
      currency?: string;
    }
  }
}

export declare namespace SubmitOfferCommands {
  export {
    type ErrorsHolder as ErrorsHolder,
    type SubmitOfferCommandCreateResponse as SubmitOfferCommandCreateResponse,
    type SubmitOfferCommandRetrieveResponse as SubmitOfferCommandRetrieveResponse,
    type SubmitOfferCommandCreateParams as SubmitOfferCommandCreateParams,
  };
}
