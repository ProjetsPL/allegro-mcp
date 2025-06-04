// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AttachmentsAPI from './attachments';
import {
  AfterSalesServiceAttachment,
  AttachmentCreateParams,
  AttachmentUploadParams,
  Attachments,
} from './attachments';
import * as ImpliedWarrantiesAPI from './implied-warranties';
import {
  AfterSalesServiceAddress,
  ImpliedWarranties,
  ImpliedWarrantyCreateParams,
  ImpliedWarrantyListParams,
  ImpliedWarrantyListResponse,
  ImpliedWarrantyPeriod,
  ImpliedWarrantyRequest,
  ImpliedWarrantyResponse,
  ImpliedWarrantyUpdateParams,
} from './implied-warranties';
import * as ReturnPoliciesAPI from './return-policies';
import {
  ReturnPolicies,
  ReturnPolicyAddress,
  ReturnPolicyAvailability,
  ReturnPolicyContact,
  ReturnPolicyCreateParams,
  ReturnPolicyListParams,
  ReturnPolicyListResponse,
  ReturnPolicyOptions,
  ReturnPolicyRequest,
  ReturnPolicyResponse,
  ReturnPolicyReturnCost,
  ReturnPolicyUpdateParams,
} from './return-policies';
import * as WarrantiesAPI from './warranties';
import {
  Warranties,
  WarrantyCreateParams,
  WarrantyListParams,
  WarrantyListResponse,
  WarrantyPeriod,
  WarrantyRequest,
  WarrantyResponse,
  WarrantyType,
  WarrantyUpdateParams,
} from './warranties';

export class AfterSalesServiceConditions extends APIResource {
  returnPolicies: ReturnPoliciesAPI.ReturnPolicies = new ReturnPoliciesAPI.ReturnPolicies(this._client);
  impliedWarranties: ImpliedWarrantiesAPI.ImpliedWarranties = new ImpliedWarrantiesAPI.ImpliedWarranties(
    this._client,
  );
  warranties: WarrantiesAPI.Warranties = new WarrantiesAPI.Warranties(this._client);
  attachments: AttachmentsAPI.Attachments = new AttachmentsAPI.Attachments(this._client);
}

AfterSalesServiceConditions.ReturnPolicies = ReturnPolicies;
AfterSalesServiceConditions.ImpliedWarranties = ImpliedWarranties;
AfterSalesServiceConditions.Warranties = Warranties;
AfterSalesServiceConditions.Attachments = Attachments;

export declare namespace AfterSalesServiceConditions {
  export {
    ReturnPolicies as ReturnPolicies,
    type ReturnPolicyAddress as ReturnPolicyAddress,
    type ReturnPolicyAvailability as ReturnPolicyAvailability,
    type ReturnPolicyContact as ReturnPolicyContact,
    type ReturnPolicyOptions as ReturnPolicyOptions,
    type ReturnPolicyRequest as ReturnPolicyRequest,
    type ReturnPolicyResponse as ReturnPolicyResponse,
    type ReturnPolicyReturnCost as ReturnPolicyReturnCost,
    type ReturnPolicyListResponse as ReturnPolicyListResponse,
    type ReturnPolicyCreateParams as ReturnPolicyCreateParams,
    type ReturnPolicyUpdateParams as ReturnPolicyUpdateParams,
    type ReturnPolicyListParams as ReturnPolicyListParams,
  };

  export {
    ImpliedWarranties as ImpliedWarranties,
    type AfterSalesServiceAddress as AfterSalesServiceAddress,
    type ImpliedWarrantyPeriod as ImpliedWarrantyPeriod,
    type ImpliedWarrantyRequest as ImpliedWarrantyRequest,
    type ImpliedWarrantyResponse as ImpliedWarrantyResponse,
    type ImpliedWarrantyListResponse as ImpliedWarrantyListResponse,
    type ImpliedWarrantyCreateParams as ImpliedWarrantyCreateParams,
    type ImpliedWarrantyUpdateParams as ImpliedWarrantyUpdateParams,
    type ImpliedWarrantyListParams as ImpliedWarrantyListParams,
  };

  export {
    Warranties as Warranties,
    type WarrantyPeriod as WarrantyPeriod,
    type WarrantyRequest as WarrantyRequest,
    type WarrantyResponse as WarrantyResponse,
    type WarrantyType as WarrantyType,
    type WarrantyListResponse as WarrantyListResponse,
    type WarrantyCreateParams as WarrantyCreateParams,
    type WarrantyUpdateParams as WarrantyUpdateParams,
    type WarrantyListParams as WarrantyListParams,
  };

  export {
    Attachments as Attachments,
    type AfterSalesServiceAttachment as AfterSalesServiceAttachment,
    type AttachmentCreateParams as AttachmentCreateParams,
    type AttachmentUploadParams as AttachmentUploadParams,
  };
}
