let nock = require('nock');

module.exports.hash = "18a015d325496a2230c7ca151e525fcc";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '84e10da0-7734-4177-95ed-c343fe100c00',
  'x-ms-ests-server',
  '2.1.12261.14 - KRSLR1 ProdSlices',
  'Set-Cookie',
  'fpc=Ar_XcBcv1EJHiiXUdI4V9LA; expires=Sun, 09-Jan-2022 06:17:15 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrpvDbtAU739-xc8lGHvLcJupEi6HHOqTy2p3BiQQ3GZOXYOuYPqAD3BEtq5SkTT-2WI3a8JQXmMKih2P-JXAa0l_tR_Ve7lpxWUUgQzdSXfLh6grMPgJyN20c01-cQk-ailxQvROqHXo0vZ_qXyrXXAoTW04nhPvYysteofrzA08gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 10 Dec 2021 06:17:15 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '20616d55-2ea3-43e7-9507-b18d072f0b00',
  'x-ms-ests-server',
  '2.1.12261.14 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=ArUzQ09ADp5EsumyyETev10; expires=Sun, 09-Jan-2022 06:17:15 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrmOU9iGQTg31GsWSyqlffey5BDrAFj8kUHRZExmLTuFNjoxo7W-LNogTdRmvDsOhtHe-ht-a9qc6uQoqSMn2rZcaKFMjSR54hRYDQB7llZdm7XjNu6SR3Iq5k8HuXCL_k-4-B1aYi-ErwzoxCYN4lY3VbN4VypHJsjStuU2khv-ogAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 10 Dec 2021 06:17:15 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=89b74ffe-8576-4a85-aa9d-7b7ec8dc0141&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '9e4deb1d-59f9-4f91-a0fa-cb1e10750b00',
  'x-ms-ests-server',
  '2.1.12261.14 - KRSLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AhpLrG4EAiNKhaRgLBD7XsUWPr5BAQAAAOvnRNkOAAAA; expires=Sun, 09-Jan-2022 06:17:16 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 10 Dec 2021 06:17:15 GMT',
  'Content-Length',
  '1374'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex', {"location":"eastus","properties":{"addressSpace":{"addressPrefixes":["10.0.0.0/16"]}}})
  .query(true)
  .reply(201, {"name":"networknamex","id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex","etag":"W/\"f8fcacf8-ef0c-472d-877a-e8dc5b675975\"","type":"Microsoft.Network/virtualNetworks","location":"eastus","properties":{"provisioningState":"Updating","resourceGuid":"f29a78a1-30bc-416b-a3da-d46ec6640d65","addressSpace":{"addressPrefixes":["10.0.0.0/16"]},"subnets":[],"virtualNetworkPeerings":[],"enableDdosProtection":false}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '610',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '3',
  'x-ms-request-id',
  '2b2ae2b3-979a-4345-a96e-5a7dd0cc449a',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/2b2ae2b3-979a-4345-a96e-5a7dd0cc449a?api-version=2021-05-01',
  'x-ms-correlation-request-id',
  '6df826de-2d74-4350-ac8d-ce8d99bddc36',
  'Azure-AsyncNotification',
  'Enabled',
  'x-ms-arm-service-request-id',
  '4ea5e19d-991c-4e6b-842e-5099df5fc6bd',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T061727Z:6df826de-2d74-4350-ac8d-ce8d99bddc36',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 06:17:26 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/2b2ae2b3-979a-4345-a96e-5a7dd0cc449a')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e947afd7d3699ecff2d947bf71f24b","fe1f4f9490471d000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '646c8f16-ccac-44ac-92fd-470979fcefdd',
  'x-ms-correlation-request-id',
  'aec487e1-c036-4d3c-9dcf-a7797cfd2429',
  'x-ms-arm-service-request-id',
  'b0f87e2b-e247-4804-8613-4af83e60cdab',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11999',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T061727Z:aec487e1-c036-4d3c-9dcf-a7797cfd2429',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 06:17:26 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex', {"properties":{"addressPrefix":"10.0.0.0/24"}})
  .query(true)
  .reply(201, {"name":"subnetworknamex","id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex","etag":"W/\"a8460cbc-2eb9-467e-8030-05643cea002e\"","properties":{"provisioningState":"Updating","addressPrefix":"10.0.0.0/24","delegations":[],"privateEndpointNetworkPolicies":"Enabled","privateLinkServiceNetworkPolicies":"Enabled"},"type":"Microsoft.Network/virtualNetworks/subnets"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '541',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '3',
  'x-ms-request-id',
  '96e20f6d-926e-4d8c-acae-ea9779c2759c',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/96e20f6d-926e-4d8c-acae-ea9779c2759c?api-version=2021-05-01',
  'x-ms-correlation-request-id',
  '6087723b-aa8e-4124-9cdf-5dbb9407f0f9',
  'x-ms-arm-service-request-id',
  '16239e29-fcc2-457a-a85d-42a745e22811',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1198',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T061730Z:6087723b-aa8e-4124-9cdf-5dbb9407f0f9',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 06:17:29 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/providers/Microsoft.Network/locations/eastus/operations/96e20f6d-926e-4d8c-acae-ea9779c2759c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef16f9ca4e9474d9bb5ebe6a347e947afd7d3699ecff2d947bf71f24b","fe1f4f9490471d000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  'da6f3536-cd29-4450-8e6a-4b302d2d6df7',
  'x-ms-correlation-request-id',
  '9d127208-5044-427b-94eb-01117c40a9cc',
  'x-ms-arm-service-request-id',
  '1540d776-7929-446c-8bf6-dcf0e325776b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11998',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T061730Z:9d127208-5044-427b-94eb-01117c40a9cc',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 10 Dec 2021 06:17:29 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111', {"zones":["1"],"location":"eastus","properties":{"redisConfiguration":{"maxmemory-policy":"allkeys-lru"},"enableNonSslPort":true,"shardCount":2,"minimumTlsVersion":"1.2","sku":{"name":"Premium","family":"P","capacity":1},"subnetId":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex","staticIP":"10.0.0.5"}})
  .query(true)
  .reply(201, {"id":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/Redis/myrediscachexxx111","location":"East US","name":"myrediscachexxx111","type":"Microsoft.Cache/Redis","tags":{},"properties":{"provisioningState":"Creating","redisVersion":"4.0.14","sku":{"name":"Premium","family":"P","capacity":1},"enableNonSslPort":true,"instances":[{"sslPort":15000,"nonSslPort":13000,"isMaster":false,"isPrimary":false},{"sslPort":15001,"nonSslPort":13001,"isMaster":false,"isPrimary":false},{"sslPort":15002,"nonSslPort":13002,"isMaster":false,"isPrimary":false},{"sslPort":15003,"nonSslPort":13003,"isMaster":false,"isPrimary":false}],"minimumTlsVersion":"1.2","publicNetworkAccess":"Enabled","redisConfiguration":{"maxmemory-policy":"allkeys-lru","maxclients":"7500","maxmemory-reserved":"200","maxfragmentationmemory-reserved":"300","maxmemory-delta":"200"},"accessKeys":{"primaryKey":"SecretPlaceholder","secondaryKey":"SecretPlaceholder"},"hostName":"myrediscachexxx111.redis.cache.windows.net","port":6379,"sslPort":6380,"subnetId":"/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/networknamex/subnets/subnetworknamex","staticIP":"10.0.0.5","shardCount":2,"linkedServers":[]},"zones":["1"]}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '1357',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111?api-version=2020-12-01',
  'x-ms-request-id',
  '3dd15a8c-0a99-4d1f-8b27-9fe82ad8d45c',
  'x-rp-server-mvid',
  'fb971f96-3ecd-4b9f-a956-95033cc50857',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1195',
  'x-ms-correlation-request-id',
  'b2bed04f-1a8f-4d52-a8a6-11d109f4300c',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T061742Z:b2bed04f-1a8f-4d52-a8a6-11d109f4300c',
  'Date',
  'Fri, 10 Dec 2021 06:17:41 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cache/redis/myrediscachexxx111')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e4fb2e93cbffb2a9f156858e3e7141fbd7bf76e7777f7a3d1476535cdd037e1729a356dfad56bfa70992d72fa20fa427bbdc277d12ef07576d17cf4e817ff92d14784ce2aafdb22c7dff8ebb268a8a36279f1bacd5ac038a973ea7b7941af71473f49b8530bfa667fbc33dedda7cf9bb76bbcad08bdacf345b15ed0e7e7d9a228aff111fd31cd56d9b468e9cf5dea375f6693327f512d5f37e5cbaa6e3f7ad4d6eb7cf451b16cda6c39053adffbc51f35e6cbddfb3b3b3b3464affdee3dfea868be208ae4f5478fceb3b20184e6655d2cb29a3ae24f7ec9a80367b70f873e7a7f387b7d38f4d1fbc3b9d787431fdd0ce7fba38f16c5b258ac176f4a6f5676c77b44edd57a5216d317797b55d56f8fa74450a2e847a74cf5197dcf5379522dcf8b8b754df38b577ff1478becdd225f54f5f5f6aaa2d7a9ab8fb2b27c9b5f37db65bda6d7a8c1b42cf2650b680f0879f94c5f229ecfeb4b82ffe8a33df3d5799d5d2ce805eea3df8e062bedf4ab595eb6197d8ef7894d32c6fcf722043e7ab45c97e5e8a379d5b42f84d1fa9c3fe60fc6fcc9f8aa58ceaaab66bccc5bea62c5c4fdf4de8387c4af86d69fde3b201622e9a6366740e72efdfeb329e93a21772f8bba5d67a5fed9dca5fef10b24e8dd5dc281fe6ef4a7fd9c0641b2d116d3b39784e9ee0e49dfcef83e3e9d67f5eca45a2f6944c48165b17c9bcf5e83c23591ed7bdf273afea05ab2487db4fbd1f77f","c9ff03b438e1cbd6040000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-request-id',
  '673267f5-d493-400a-9543-74b642c8253f',
  'x-rp-server-mvid',
  'fb971f96-3ecd-4b9f-a956-95033cc50857',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11960',
  'x-ms-correlation-request-id',
  'f3d8b5be-3508-4b9b-995f-56fdc67e4db9',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211210T061742Z:f3d8b5be-3508-4b9b-995f-56fdc67e4db9',
  'Date',
  'Fri, 10 Dec 2021 06:17:42 GMT'
]);
