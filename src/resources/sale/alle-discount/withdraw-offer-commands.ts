// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubmitOfferCommandsAPI from './submit-offer-commands';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class WithdrawOfferCommands extends APIResource {
  /**
   * Use this resource to create a command for withdrawing an offer from specific
   * campaign. Offer will be withdrawn from the AlleDiscount campaign only if command
   * is processed successfully. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-wycofac-oferte-z-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-withdraw-an-offer-from-a-campaign" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const withdrawOfferCommand =
   *   await client.sale.alleDiscount.withdrawOfferCommands.create(
   *     {
   *       commandId: 'c1b3f63d-d293-4333-911d-a0c1053e2c81',
   *       input: {
   *         participationId:
   *           'f9a4a70c-6db9-4473-976c-90f8df9f74e8',
   *       },
   *     },
   *   );
   * ```
   */
  create(
    body: WithdrawOfferCommandCreateParams,
    options?: RequestOptions,
  ): APIPromise<WithdrawOfferCommandCreateResponse> {
    return this._client.post('/sale/alle-discount/withdraw-offer-commands', {
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
   * Use this resource to get information about the withdrawal command execution
   * status. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-sprawdzic-status-wycofania-oferty-z-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-check-the-withdrawal-status-of-an-offer-from-a-campaign" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const withdrawOfferCommand =
   *   await client.sale.alleDiscount.withdrawOfferCommands.retrieve(
   *     'commandId',
   *   );
   * ```
   */
  retrieve(commandID: string, options?: RequestOptions): APIPromise<WithdrawOfferCommandRetrieveResponse> {
    return this._client.get(path`/sale/alle-discount/withdraw-offer-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface WithdrawOfferCommandCreateResponse {
  /**
   * The id of the command.
   */
  id?: string;

  /**
   * Provided withdraw offer command input data.
   */
  input?: WithdrawOfferCommandCreateResponse.Input;

  /**
   * Withdraw offer command output data.
   */
  output?: WithdrawOfferCommandCreateResponse.Output;
}

export namespace WithdrawOfferCommandCreateResponse {
  /**
   * Provided withdraw offer command input data.
   */
  export interface Input {
    /**
     * The id of the participation which will be withdrawn.
     */
    participationId?: string;
  }

  /**
   * Withdraw offer command output data.
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

export interface WithdrawOfferCommandRetrieveResponse {
  /**
   * The id of the command.
   */
  id?: string;

  /**
   * Provided withdraw offer command input data.
   */
  input?: WithdrawOfferCommandRetrieveResponse.Input;

  /**
   * Withdraw offer command output data.
   */
  output?: WithdrawOfferCommandRetrieveResponse.Output;
}

export namespace WithdrawOfferCommandRetrieveResponse {
  /**
   * Provided withdraw offer command input data.
   */
  export interface Input {
    /**
     * The id of the withdrawn participation.
     */
    participationId?: string;
  }

  /**
   * Withdraw offer command output data.
   */
  export interface Output {
    /**
     * Command creation date. ISO 8601 format.
     */
    createdAt?: string;

    errors?: Array<SubmitOfferCommandsAPI.ErrorsHolder>;

    /**
     * Status field possible values:
     *
     * - NEW - command processing has not started
     * - IN_PROGRESS - command is being processed
     * - FAILED - processing of the command failed. Offer will not participate in
     *   AlleDiscount.
     * - SUCCESSFUL - processing of the command was successful. New participation was
     *   created. To make sure that the offer is participating in AlleDiscount, request
     *   the participation status.
     */
    status?: 'NEW' | 'IN_PROGRESS' | 'SUCCESSFUL' | 'FAILED';

    /**
     * Command update date. ISO 8601 format.
     */
    updatedAt?: string;

    /**
     * Withdrawn offer participation data. Non-null when command status is
     * `SUCCESSFUL`.
     */
    withdrawnOfferParticipation?: Output.WithdrawnOfferParticipation | null;
  }

  export namespace Output {
    /**
     * Withdrawn offer participation data. Non-null when command status is
     * `SUCCESSFUL`.
     */
    export interface WithdrawnOfferParticipation {
      /**
       * The id of the withdrawn participation.
       */
      participationId?: string;
    }
  }
}

export interface WithdrawOfferCommandCreateParams {
  /**
   * The Command UUID. If empty, system generates new one.
   */
  commandId?: string | null;

  /**
   * Command input.
   */
  input?: WithdrawOfferCommandCreateParams.Input;
}

export namespace WithdrawOfferCommandCreateParams {
  /**
   * Command input.
   */
  export interface Input {
    /**
     * The id of the offer participation you wish to withdraw. Participation id can be
     * found using `GET /sale/alle-discount/{campaignId}/submitted-offers` or
     * `GET /sale/alle-discount/submit-offer-commands` endpoints.
     */
    participationId?: string;
  }
}

export declare namespace WithdrawOfferCommands {
  export {
    type WithdrawOfferCommandCreateResponse as WithdrawOfferCommandCreateResponse,
    type WithdrawOfferCommandRetrieveResponse as WithdrawOfferCommandRetrieveResponse,
    type WithdrawOfferCommandCreateParams as WithdrawOfferCommandCreateParams,
  };
}
