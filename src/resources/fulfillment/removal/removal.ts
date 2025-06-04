// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PreferencesAPI from './preferences';
import { FulfillmentRemovalPreference, PreferenceCreateParams, Preferences } from './preferences';

export class Removal extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
}

Removal.Preferences = Preferences;

export declare namespace Removal {
  export {
    Preferences as Preferences,
    type FulfillmentRemovalPreference as FulfillmentRemovalPreference,
    type PreferenceCreateParams as PreferenceCreateParams,
  };
}
