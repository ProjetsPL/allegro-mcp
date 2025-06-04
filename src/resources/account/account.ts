// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdditionalEmailsAPI from './additional-emails';
import {
  AdditionalEmail,
  AdditionalEmailCreateParams,
  AdditionalEmailListResponse,
  AdditionalEmails,
} from './additional-emails';

export class Account extends APIResource {
  additionalEmails: AdditionalEmailsAPI.AdditionalEmails = new AdditionalEmailsAPI.AdditionalEmails(
    this._client,
  );
}

Account.AdditionalEmails = AdditionalEmails;

export declare namespace Account {
  export {
    AdditionalEmails as AdditionalEmails,
    type AdditionalEmail as AdditionalEmail,
    type AdditionalEmailListResponse as AdditionalEmailListResponse,
    type AdditionalEmailCreateParams as AdditionalEmailCreateParams,
  };
}
