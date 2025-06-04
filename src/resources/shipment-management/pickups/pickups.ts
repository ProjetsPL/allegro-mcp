// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CreateCommandsAPI from './create-commands';
import {
  CreateCommandGetStatusResponse,
  CreateCommandRequestPickupParams,
  CreateCommands,
  CreatePickupCommand,
} from './create-commands';

export class Pickups extends APIResource {
  createCommands: CreateCommandsAPI.CreateCommands = new CreateCommandsAPI.CreateCommands(this._client);
}

Pickups.CreateCommands = CreateCommands;

export declare namespace Pickups {
  export {
    CreateCommands as CreateCommands,
    type CreatePickupCommand as CreatePickupCommand,
    type CreateCommandGetStatusResponse as CreateCommandGetStatusResponse,
    type CreateCommandRequestPickupParams as CreateCommandRequestPickupParams,
  };
}
