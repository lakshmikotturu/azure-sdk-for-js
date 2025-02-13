/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  ManagementGroupsImpl,
  ManagementGroupSubscriptionsImpl,
  HierarchySettingsOperationsImpl,
  OperationsImpl,
  EntitiesImpl
} from "./operations";
import {
  ManagementGroups,
  ManagementGroupSubscriptions,
  HierarchySettingsOperations,
  Operations,
  Entities
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { ManagementGroupsAPIContext } from "./managementGroupsAPIContext";
import {
  ManagementGroupsAPIOptionalParams,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityOptionalParams,
  CheckNameAvailabilityResponse,
  StartTenantBackfillOptionalParams,
  StartTenantBackfillResponse,
  TenantBackfillStatusOptionalParams,
  TenantBackfillStatusResponse
} from "./models";

export class ManagementGroupsAPI extends ManagementGroupsAPIContext {
  /**
   * Initializes a new instance of the ManagementGroupsAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: ManagementGroupsAPIOptionalParams
  ) {
    super(credentials, options);
    this.managementGroups = new ManagementGroupsImpl(this);
    this.managementGroupSubscriptions = new ManagementGroupSubscriptionsImpl(
      this
    );
    this.hierarchySettingsOperations = new HierarchySettingsOperationsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.entities = new EntitiesImpl(this);
  }

  /**
   * Checks if the specified management group name is valid and unique
   * @param checkNameAvailabilityRequest Management group name availability check parameters.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityRequest: CheckNameAvailabilityRequest,
    options?: CheckNameAvailabilityOptionalParams
  ): Promise<CheckNameAvailabilityResponse> {
    return this.sendOperationRequest(
      { checkNameAvailabilityRequest, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Starts backfilling subscriptions for the Tenant.
   * @param options The options parameters.
   */
  startTenantBackfill(
    options?: StartTenantBackfillOptionalParams
  ): Promise<StartTenantBackfillResponse> {
    return this.sendOperationRequest(
      { options },
      startTenantBackfillOperationSpec
    );
  }

  /**
   * Gets tenant backfill status
   * @param options The options parameters.
   */
  tenantBackfillStatus(
    options?: TenantBackfillStatusOptionalParams
  ): Promise<TenantBackfillStatusResponse> {
    return this.sendOperationRequest(
      { options },
      tenantBackfillStatusOperationSpec
    );
  }

  managementGroups: ManagementGroups;
  managementGroupSubscriptions: ManagementGroupSubscriptions;
  hierarchySettingsOperations: HierarchySettingsOperations;
  operations: Operations;
  entities: Entities;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.checkNameAvailabilityRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const startTenantBackfillOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/startTenantBackfill",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TenantBackfillStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const tenantBackfillStatusOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/tenantBackfillStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TenantBackfillStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
