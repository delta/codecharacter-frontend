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
import type {
  ActivateUserRequest,
  GenericError,
  RatingHistory,
  RegisterUserRequest,
} from '../models';

export interface ActivateUserOperationRequest {
  userId: string;
  activateUserRequest: ActivateUserRequest;
}

export interface GetRatingHistoryRequest {
  userId: string;
}

export interface RegisterRequest {
  registerUserRequest: RegisterUserRequest;
}

/**
 * UserApi - interface
 *
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
  /**
   * Activate user by using the token sent via email
   * @summary Activate user
   * @param {string} userId ID of the user
   * @param {ActivateUserRequest} activateUserRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApiInterface
   */
  activateUserRaw(
    requestParameters: ActivateUserOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Activate user by using the token sent via email
   * Activate user
   */
  activateUser(
    userId: string,
    activateUserRequest: ActivateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void>;

  /**
   * Get user rating history
   * @summary Get user rating history
   * @param {string} userId ID of the user
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApiInterface
   */
  getRatingHistoryRaw(
    requestParameters: GetRatingHistoryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<RatingHistory>>>;

  /**
   * Get user rating history
   * Get user rating history
   */
  getRatingHistory(
    userId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<RatingHistory>>;

  /**
   * Register user
   * @summary Register user
   * @param {RegisterUserRequest} registerUserRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApiInterface
   */
  registerRaw(
    requestParameters: RegisterRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Register user
   * Register user
   */
  register(
    registerUserRequest: RegisterUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void>;
}

/**
 *
 */
export class UserApi extends runtime.BaseAPI implements UserApiInterface {
  /**
   * Activate user by using the token sent via email
   * Activate user
   */
  async activateUserRaw(
    requestParameters: ActivateUserOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.userId === null ||
      requestParameters.userId === undefined
    ) {
      throw new runtime.RequiredError(
        'userId',
        'Required parameter requestParameters.userId was null or undefined when calling activateUser.',
      );
    }

    if (
      requestParameters.activateUserRequest === null ||
      requestParameters.activateUserRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'activateUserRequest',
        'Required parameter requestParameters.activateUserRequest was null or undefined when calling activateUser.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/users/{userId}/activate`.replace(
          `{${'userId'}}`,
          encodeURIComponent(String(requestParameters.userId)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.activateUserRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Activate user by using the token sent via email
   * Activate user
   */
  async activateUser(
    userId: string,
    activateUserRequest: ActivateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.activateUserRaw(
      { userId: userId, activateUserRequest: activateUserRequest },
      initOverrides,
    );
  }

  /**
   * Get user rating history
   * Get user rating history
   */
  async getRatingHistoryRaw(
    requestParameters: GetRatingHistoryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<RatingHistory>>> {
    if (
      requestParameters.userId === null ||
      requestParameters.userId === undefined
    ) {
      throw new runtime.RequiredError(
        'userId',
        'Required parameter requestParameters.userId was null or undefined when calling getRatingHistory.',
      );
    }

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
        path: `/users/{userId}/ratingHistory`.replace(
          `{${'userId'}}`,
          encodeURIComponent(String(requestParameters.userId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get user rating history
   * Get user rating history
   */
  async getRatingHistory(
    userId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<RatingHistory>> {
    const response = await this.getRatingHistoryRaw(
      { userId: userId },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Register user
   * Register user
   */
  async registerRaw(
    requestParameters: RegisterRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.registerUserRequest === null ||
      requestParameters.registerUserRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'registerUserRequest',
        'Required parameter requestParameters.registerUserRequest was null or undefined when calling register.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/users`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.registerUserRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Register user
   * Register user
   */
  async register(
    registerUserRequest: RegisterUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.registerRaw(
      { registerUserRequest: registerUserRequest },
      initOverrides,
    );
  }
}
