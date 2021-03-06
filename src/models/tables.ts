/* tslint:disable */


/**
 * AUTO-GENERATED FILE @ 2018-03-08 13:40:23 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.1
 * $ schemats generate -c postgres://username:password@localhost/stream -t views -t users -t blacklist -t txs -t upvotes -t notifications -t platforms -t promoblacklist -s public
 *
 */



export namespace usersFields {
  export type id = string;
  export type twitchId = string;
  export type streamlabsToken = string;
  export type ethAddress = string;
}

export interface users {
  id: usersFields.id;
  twitch_id: usersFields.twitchId;
  streamlabs_token: usersFields.streamlabsToken;
  eth_address: usersFields.ethAddress;
}
