# Azure Purview Catalog TypeScript Protocol Layer

> see https://aka.ms/autorest

## Configuration

```yaml
package-name: "@azure-rest/purview-catalog"
title: PurviewCatalog
description: Purview Catalog Client
generate-metadata: false
license-header: MICROSOFT_MIT_NO_VERSION
output-folder: ../
source-code-folder-path: ./src
input-file: https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/purview/data-plane/Azure.Analytics.Purview.Catalog/preview/2021-05-01-preview/purviewcatalog.json
package-version: 1.0.0-beta.4
rest-level-client: true
add-credentials: true
credential-scopes: "https://purview.azure.net/.default"
use-extension:
  "@autorest/typescript": "6.0.0-alpha.13.20210922.1
"
```

```yaml
directive:
  - from: swagger-document
    where: $.definitions.SearchParameters
    transform: >
      $["x-ms-client-name"] = "searchParams";
```
