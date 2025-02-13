/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCustomParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCustomParameters",
    modelProperties: {
      amlWorkspaceId: {
        serializedName: "amlWorkspaceId",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      customVirtualNetworkId: {
        serializedName: "customVirtualNetworkId",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      customPublicSubnetName: {
        serializedName: "customPublicSubnetName",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      customPrivateSubnetName: {
        serializedName: "customPrivateSubnetName",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      enableNoPublicIp: {
        serializedName: "enableNoPublicIp",
        type: {
          name: "Composite",
          className: "WorkspaceCustomBooleanParameter"
        }
      },
      loadBalancerBackendPoolName: {
        serializedName: "loadBalancerBackendPoolName",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      loadBalancerId: {
        serializedName: "loadBalancerId",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      natGatewayName: {
        serializedName: "natGatewayName",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      publicIpName: {
        serializedName: "publicIpName",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      prepareEncryption: {
        serializedName: "prepareEncryption",
        type: {
          name: "Composite",
          className: "WorkspaceCustomBooleanParameter"
        }
      },
      encryption: {
        serializedName: "encryption",
        type: {
          name: "Composite",
          className: "WorkspaceEncryptionParameter"
        }
      },
      requireInfrastructureEncryption: {
        serializedName: "requireInfrastructureEncryption",
        type: {
          name: "Composite",
          className: "WorkspaceCustomBooleanParameter"
        }
      },
      storageAccountName: {
        serializedName: "storageAccountName",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      storageAccountSkuName: {
        serializedName: "storageAccountSkuName",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      vnetAddressPrefix: {
        serializedName: "vnetAddressPrefix",
        type: {
          name: "Composite",
          className: "WorkspaceCustomStringParameter"
        }
      },
      resourceTags: {
        serializedName: "resourceTags",
        type: {
          name: "Composite",
          className: "WorkspaceCustomObjectParameter"
        }
      }
    }
  }
};

export const WorkspaceCustomStringParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCustomStringParameter",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCustomBooleanParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCustomBooleanParameter",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const WorkspaceEncryptionParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceEncryptionParameter",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      }
    }
  }
};

export const Encryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Encryption",
    modelProperties: {
      keySource: {
        defaultValue: "Default",
        serializedName: "keySource",
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "KeyName",
        type: {
          name: "String"
        }
      },
      keyVersion: {
        serializedName: "keyversion",
        type: {
          name: "String"
        }
      },
      keyVaultUri: {
        serializedName: "keyvaulturi",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceCustomObjectParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceCustomObjectParameter",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WorkspaceProviderAuthorization: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceProviderAuthorization",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      roleDefinitionId: {
        serializedName: "roleDefinitionId",
        required: true,
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const CreatedBy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatedBy",
    modelProperties: {
      oid: {
        serializedName: "oid",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      puid: {
        serializedName: "puid",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      applicationId: {
        serializedName: "applicationId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const ManagedIdentityConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIdentityConfiguration",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspacePropertiesEncryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspacePropertiesEncryption",
    modelProperties: {
      entities: {
        serializedName: "entities",
        type: {
          name: "Composite",
          className: "EncryptionEntitiesDefinition"
        }
      }
    }
  }
};

export const EncryptionEntitiesDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionEntitiesDefinition",
    modelProperties: {
      managedServices: {
        serializedName: "managedServices",
        type: {
          name: "Composite",
          className: "EncryptionV2"
        }
      }
    }
  }
};

export const EncryptionV2: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionV2",
    modelProperties: {
      keySource: {
        serializedName: "keySource",
        required: true,
        type: {
          name: "String"
        }
      },
      keyVaultProperties: {
        serializedName: "keyVaultProperties",
        type: {
          name: "Composite",
          className: "EncryptionV2KeyVaultProperties"
        }
      }
    }
  }
};

export const EncryptionV2KeyVaultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionV2KeyVaultProperties",
    modelProperties: {
      keyVaultUri: {
        serializedName: "keyVaultUri",
        required: true,
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "keyName",
        required: true,
        type: {
          name: "String"
        }
      },
      keyVersion: {
        serializedName: "keyVersion",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateEndpointConnectionProperties"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionProperties",
    modelProperties: {
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionRequired: {
        serializedName: "actionRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorInfo"
        }
      }
    }
  }
};

export const ErrorInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorInfo",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const WorkspaceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourcesList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourcesList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GroupIdInformation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupIdInformationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupIdInformationProperties",
    modelProperties: {
      groupId: {
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PrivateEndpointConnectionsList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionsList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OutboundEnvironmentEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OutboundEnvironmentEndpoint",
    modelProperties: {
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      endpoints: {
        serializedName: "endpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointDependency"
            }
          }
        }
      }
    }
  }
};

export const EndpointDependency: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EndpointDependency",
    modelProperties: {
      domainName: {
        serializedName: "domainName",
        type: {
          name: "String"
        }
      },
      endpointDetails: {
        serializedName: "endpointDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointDetail"
            }
          }
        }
      }
    }
  }
};

export const EndpointDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EndpointDetail",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      latency: {
        serializedName: "latency",
        type: {
          name: "Number"
        }
      },
      isAccessible: {
        serializedName: "isAccessible",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const VirtualNetworkPeering: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkPeering",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      allowVirtualNetworkAccess: {
        serializedName: "properties.allowVirtualNetworkAccess",
        type: {
          name: "Boolean"
        }
      },
      allowForwardedTraffic: {
        serializedName: "properties.allowForwardedTraffic",
        type: {
          name: "Boolean"
        }
      },
      allowGatewayTransit: {
        serializedName: "properties.allowGatewayTransit",
        type: {
          name: "Boolean"
        }
      },
      useRemoteGateways: {
        serializedName: "properties.useRemoteGateways",
        type: {
          name: "Boolean"
        }
      },
      databricksVirtualNetwork: {
        serializedName: "properties.databricksVirtualNetwork",
        type: {
          name: "Composite",
          className:
            "VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork"
        }
      },
      databricksAddressSpace: {
        serializedName: "properties.databricksAddressSpace",
        type: {
          name: "Composite",
          className: "AddressSpace"
        }
      },
      remoteVirtualNetwork: {
        serializedName: "properties.remoteVirtualNetwork",
        type: {
          name: "Composite",
          className: "VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork"
        }
      },
      remoteAddressSpace: {
        serializedName: "properties.remoteAddressSpace",
        type: {
          name: "Composite",
          className: "AddressSpace"
        }
      },
      peeringState: {
        serializedName: "properties.peeringState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddressSpace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddressSpace",
    modelProperties: {
      addressPrefixes: {
        serializedName: "addressPrefixes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkPeeringList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkPeeringList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkPeering"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GroupIdInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GroupIdInformation",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "GroupIdInformationProperties"
        }
      }
    }
  }
};

export const Workspace: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      managedResourceGroupId: {
        serializedName: "properties.managedResourceGroupId",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Composite",
          className: "WorkspaceCustomParameters"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      uiDefinitionUri: {
        serializedName: "properties.uiDefinitionUri",
        type: {
          name: "String"
        }
      },
      authorizations: {
        serializedName: "properties.authorizations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WorkspaceProviderAuthorization"
            }
          }
        }
      },
      createdBy: {
        serializedName: "properties.createdBy",
        type: {
          name: "Composite",
          className: "CreatedBy"
        }
      },
      updatedBy: {
        serializedName: "properties.updatedBy",
        type: {
          name: "Composite",
          className: "CreatedBy"
        }
      },
      createdDateTime: {
        serializedName: "properties.createdDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      workspaceId: {
        serializedName: "properties.workspaceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      workspaceUrl: {
        serializedName: "properties.workspaceUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageAccountIdentity: {
        serializedName: "properties.storageAccountIdentity",
        type: {
          name: "Composite",
          className: "ManagedIdentityConfiguration"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "WorkspacePropertiesEncryption"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      requiredNsgRules: {
        serializedName: "properties.requiredNsgRules",
        type: {
          name: "String"
        }
      }
    }
  }
};
