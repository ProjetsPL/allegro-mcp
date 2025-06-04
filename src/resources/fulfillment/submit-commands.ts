// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SubmitCommands extends APIResource {
  /**
   * Use this resource to get submit status of the Advance Ship Notice. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#zakoncz-edycje-i-wyslij-awizo" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#finish-editing-and-submit-the-advance-ship-notice" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const submitCommand =
   *   await client.fulfillment.submitCommands.getStatus(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getStatus(commandID: string, options?: RequestOptions): APIPromise<SubmitCommand> {
    return this._client.get(path`/fulfillment/submit-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to submit the Advance Ship Notice. After this operation,
   * updates of the Advance Ship Notice are limited to selected properties only. See
   * <a href="../../documentation#operation/updateSubmittedAdvanceShipNotice">PUT
   * /fulfillment/advance-ship-notices/{id}/submitted</a>. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#zakoncz-edycje-i-wyslij-awizo" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#finish-editing-and-submit-the-advance-ship-notice" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const submitCommand =
   *   await client.fulfillment.submitCommands.submit(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       input: {
   *         advanceShipNoticeId:
   *           '123a08d7-ab9b-460d-b9cb-d6ed64b3a018',
   *       },
   *     },
   *   );
   * ```
   */
  submit(
    commandID: string,
    body: SubmitCommandSubmitParams,
    options?: RequestOptions,
  ): APIPromise<SubmitCommand> {
    return this._client.put(path`/fulfillment/submit-commands/${commandID}`, {
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
}

/**
 * The submit command.
 */
export interface SubmitCommand {
  /**
   * Represents input of the Advance Ship Notice submit command.
   */
  input: SubmitCommand.Input;

  /**
   * The identifier of command.
   */
  id?: string;

  /**
   * Represents output of the Advance Ship Notice submit command.
   */
  output?: SubmitCommand.Output;
}

export namespace SubmitCommand {
  /**
   * Represents input of the Advance Ship Notice submit command.
   */
  export interface Input {
    /**
     * The Advance Ship Notice identifier.
     */
    advanceShipNoticeId: string;
  }

  /**
   * Represents output of the Advance Ship Notice submit command.
   */
  export interface Output {
    /**
     * The command status.
     */
    status: string;
  }
}

export interface SubmitCommandSubmitParams {
  /**
   * Represents input of the Advance Ship Notice submit command.
   */
  input: SubmitCommandSubmitParams.Input;

  /**
   * The identifier of command.
   */
  id?: string;

  /**
   * Represents output of the Advance Ship Notice submit command.
   */
  output?: SubmitCommandSubmitParams.Output;
}

export namespace SubmitCommandSubmitParams {
  /**
   * Represents input of the Advance Ship Notice submit command.
   */
  export interface Input {
    /**
     * The Advance Ship Notice identifier.
     */
    advanceShipNoticeId: string;
  }

  /**
   * Represents output of the Advance Ship Notice submit command.
   */
  export interface Output {
    /**
     * The command status.
     */
    status: string;
  }
}

export declare namespace SubmitCommands {
  export { type SubmitCommand as SubmitCommand, type SubmitCommandSubmitParams as SubmitCommandSubmitParams };
}
