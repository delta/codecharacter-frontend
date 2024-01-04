/* tslint:disable */
/* eslint-disable */
/**
 * CodeCharacter API
 * Specification of the CodeCharacter API
 *
 * The version of the OpenAPI document: 2024.0.1
 * Contact: delta@nitt.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  DailyChallengeGetRequest,
  DailyChallengeLeaderBoardResponse,
  DailyChallengeMatchRequest,
  GenericError,
} from '../models';

export interface CreateDailyChallengeMatchRequest {
  dailyChallengeMatchRequest: DailyChallengeMatchRequest;
}

export interface GetDailyChallengeLeaderBoardRequest {
  page?: number;
  size?: number;
}

/**
 * DailyChallengesApi - interface
 *
 * @export
 * @interface DailyChallengesApiInterface
 */
export interface DailyChallengesApiInterface {
  /**
   * Match making for Daily Challenges
   * @summary Match Execution for Daily Challenges
   * @param {DailyChallengeMatchRequest} dailyChallengeMatchRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DailyChallengesApiInterface
   */
  createDailyChallengeMatchRaw(
    requestParameters: CreateDailyChallengeMatchRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Match making for Daily Challenges
   * Match Execution for Daily Challenges
   */
  createDailyChallengeMatch(
    dailyChallengeMatchRequest: DailyChallengeMatchRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;

  /**
   * Get current user challenge for that day
   * @summary Get Daily Challenge for the day
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DailyChallengesApiInterface
   */
  getDailyChallengeRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<DailyChallengeGetRequest>>;

  /**
   * Get current user challenge for that day
   * Get Daily Challenge for the day
   */
  getDailyChallenge(
    initOverrides?: RequestInit,
  ): Promise<DailyChallengeGetRequest>;

  /**
   * Get Leaderboard for daily challenges
   * @summary Get Daily Challenges Leaderboard
   * @param {number} [page] Index of the page
   * @param {number} [size] Size of the page
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DailyChallengesApiInterface
   */
  getDailyChallengeLeaderBoardRaw(
    requestParameters: GetDailyChallengeLeaderBoardRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<DailyChallengeLeaderBoardResponse>>>;

  /**
   * Get Leaderboard for daily challenges
   * Get Daily Challenges Leaderboard
   */
  getDailyChallengeLeaderBoard(
    page?: number,
    size?: number,
    initOverrides?: RequestInit,
  ): Promise<Array<DailyChallengeLeaderBoardResponse>>;
}

/**
 *
 */
export class DailyChallengesApi
  extends runtime.BaseAPI
  implements DailyChallengesApiInterface
{
  /**
   * Match making for Daily Challenges
   * Match Execution for Daily Challenges
   */
  async createDailyChallengeMatchRaw(
    requestParameters: CreateDailyChallengeMatchRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.dailyChallengeMatchRequest === null ||
      requestParameters.dailyChallengeMatchRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'dailyChallengeMatchRequest',
        'Required parameter requestParameters.dailyChallengeMatchRequest was null or undefined when calling createDailyChallengeMatch.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('http-bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/dc/submit`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.dailyChallengeMatchRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Match making for Daily Challenges
   * Match Execution for Daily Challenges
   */
  async createDailyChallengeMatch(
    dailyChallengeMatchRequest: DailyChallengeMatchRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.createDailyChallengeMatchRaw(
      { dailyChallengeMatchRequest: dailyChallengeMatchRequest },
      initOverrides,
    );
  }

  /**
   * Get current user challenge for that day
   * Get Daily Challenge for the day
   */
  async getDailyChallengeRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<DailyChallengeGetRequest>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('http-bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/dc/get`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get current user challenge for that day
   * Get Daily Challenge for the day
   */
  async getDailyChallenge(
    initOverrides?: RequestInit,
  ): Promise<DailyChallengeGetRequest> {
    const response = await this.getDailyChallengeRaw(initOverrides);
    return await response.value();
  }

  /**
   * Get Leaderboard for daily challenges
   * Get Daily Challenges Leaderboard
   */
  async getDailyChallengeLeaderBoardRaw(
    requestParameters: GetDailyChallengeLeaderBoardRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<DailyChallengeLeaderBoardResponse>>> {
    const queryParameters: any = {};

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.size !== undefined) {
      queryParameters['size'] = requestParameters.size;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token('http-bearer', []);

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/dc/leaderboard`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get Leaderboard for daily challenges
   * Get Daily Challenges Leaderboard
   */
  async getDailyChallengeLeaderBoard(
    page?: number,
    size?: number,
    initOverrides?: RequestInit,
  ): Promise<Array<DailyChallengeLeaderBoardResponse>> {
    const response = await this.getDailyChallengeLeaderBoardRaw(
      { page: page, size: size },
      initOverrides,
    );
    return await response.value();
  }
}
