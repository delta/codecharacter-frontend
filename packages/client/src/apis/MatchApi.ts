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
import type { CreateMatchRequest, GenericError, Match } from '../models/index';

export interface CreateMatchOperationRequest {
  createMatchRequest: CreateMatchRequest;
}

/**
 * MatchApi - interface
 *
 * @export
 * @interface MatchApiInterface
 */
export interface MatchApiInterface {
  /**
   * Initiate a match by current user
   * @summary Create match
   * @param {CreateMatchRequest} createMatchRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MatchApiInterface
   */
  createMatchRaw(
    requestParameters: CreateMatchOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Initiate a match by current user
   * Create match
   */
  createMatch(
    createMatchRequest: CreateMatchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void>;

  /**
   * Get top matches
   * @summary Get top matches
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MatchApiInterface
   */
  getTopMatchesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Match>>>;

  /**
   * Get top matches
   * Get top matches
   */
  getTopMatches(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Match>>;

  /**
   * Get matches played by authenticated user
   * @summary Get user matches
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MatchApiInterface
   */
  getUserMatchesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Match>>>;

  /**
   * Get matches played by authenticated user
   * Get user matches
   */
  getUserMatches(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Match>>;
}

/**
 *
 */
export class MatchApi extends runtime.BaseAPI implements MatchApiInterface {
  /**
   * Initiate a match by current user
   * Create match
   */
  async createMatchRaw(
    requestParameters: CreateMatchOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.createMatchRequest === null ||
      requestParameters.createMatchRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'createMatchRequest',
        'Required parameter requestParameters.createMatchRequest was null or undefined when calling createMatch.',
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
        path: `/user/matches`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.createMatchRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Initiate a match by current user
   * Create match
   */
  async createMatch(
    createMatchRequest: CreateMatchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.createMatchRaw(
      { createMatchRequest: createMatchRequest },
      initOverrides,
    );
  }

  /**
   * Get top matches
   * Get top matches
   */
  async getTopMatchesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Match>>> {
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
        path: `/top-matches`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get top matches
   * Get top matches
   */
  async getTopMatches(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Match>> {
    const response = await this.getTopMatchesRaw(initOverrides);
    return await response.value();
  }

  /**
   * Get matches played by authenticated user
   * Get user matches
   */
  async getUserMatchesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Match>>> {
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
        path: `/user/matches`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get matches played by authenticated user
   * Get user matches
   */
  async getUserMatches(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Match>> {
    const response = await this.getUserMatchesRaw(initOverrides);
    return await response.value();
  }
}
