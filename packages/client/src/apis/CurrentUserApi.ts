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
  CompleteProfileRequest,
  CurrentUserProfile,
  GenericError,
  UpdateCurrentUserProfile,
  UpdatePasswordRequest,
} from '../models';

export interface CompleteUserProfileRequest {
  completeProfileRequest: CompleteProfileRequest;
}

export interface UpdateCurrentUserRequest {
  updateCurrentUserProfile: UpdateCurrentUserProfile;
}

export interface UpdatePasswordOperationRequest {
  updatePasswordRequest: UpdatePasswordRequest;
}

/**
 * CurrentUserApi - interface
 *
 * @export
 * @interface CurrentUserApiInterface
 */
export interface CurrentUserApiInterface {
  /**
   * Complete the user profile for users who registered using OAuth
   * @summary Complete user profile
   * @param {CompleteProfileRequest} completeProfileRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrentUserApiInterface
   */
  completeUserProfileRaw(
    requestParameters: CompleteUserProfileRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Complete the user profile for users who registered using OAuth
   * Complete user profile
   */
  completeUserProfile(
    completeProfileRequest: CompleteProfileRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;

  /**
   * Get current user profile
   * @summary Get current user profile
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrentUserApiInterface
   */
  getCurrentUserRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<CurrentUserProfile>>;

  /**
   * Get current user profile
   * Get current user profile
   */
  getCurrentUser(initOverrides?: RequestInit): Promise<CurrentUserProfile>;

  /**
   * Update current user
   * @summary Update current user
   * @param {UpdateCurrentUserProfile} updateCurrentUserProfile
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrentUserApiInterface
   */
  updateCurrentUserRaw(
    requestParameters: UpdateCurrentUserRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Update current user
   * Update current user
   */
  updateCurrentUser(
    updateCurrentUserProfile: UpdateCurrentUserProfile,
    initOverrides?: RequestInit,
  ): Promise<void>;

  /**
   * Update password
   * @summary Update password
   * @param {UpdatePasswordRequest} updatePasswordRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CurrentUserApiInterface
   */
  updatePasswordRaw(
    requestParameters: UpdatePasswordOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Update password
   * Update password
   */
  updatePassword(
    updatePasswordRequest: UpdatePasswordRequest,
    initOverrides?: RequestInit,
  ): Promise<void>;
}

/**
 *
 */
export class CurrentUserApi
  extends runtime.BaseAPI
  implements CurrentUserApiInterface
{
  /**
   * Complete the user profile for users who registered using OAuth
   * Complete user profile
   */
  async completeUserProfileRaw(
    requestParameters: CompleteUserProfileRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.completeProfileRequest === null ||
      requestParameters.completeProfileRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'completeProfileRequest',
        'Required parameter requestParameters.completeProfileRequest was null or undefined when calling completeUserProfile.',
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
        path: `/user/complete-profile`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.completeProfileRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Complete the user profile for users who registered using OAuth
   * Complete user profile
   */
  async completeUserProfile(
    completeProfileRequest: CompleteProfileRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.completeUserProfileRaw(
      { completeProfileRequest: completeProfileRequest },
      initOverrides,
    );
  }

  /**
   * Get current user profile
   * Get current user profile
   */
  async getCurrentUserRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<CurrentUserProfile>> {
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
        path: `/user`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get current user profile
   * Get current user profile
   */
  async getCurrentUser(
    initOverrides?: RequestInit,
  ): Promise<CurrentUserProfile> {
    const response = await this.getCurrentUserRaw(initOverrides);
    return await response.value();
  }

  /**
   * Update current user
   * Update current user
   */
  async updateCurrentUserRaw(
    requestParameters: UpdateCurrentUserRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.updateCurrentUserProfile === null ||
      requestParameters.updateCurrentUserProfile === undefined
    ) {
      throw new runtime.RequiredError(
        'updateCurrentUserProfile',
        'Required parameter requestParameters.updateCurrentUserProfile was null or undefined when calling updateCurrentUser.',
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
        path: `/user`,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.updateCurrentUserProfile,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update current user
   * Update current user
   */
  async updateCurrentUser(
    updateCurrentUserProfile: UpdateCurrentUserProfile,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.updateCurrentUserRaw(
      { updateCurrentUserProfile: updateCurrentUserProfile },
      initOverrides,
    );
  }

  /**
   * Update password
   * Update password
   */
  async updatePasswordRaw(
    requestParameters: UpdatePasswordOperationRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.updatePasswordRequest === null ||
      requestParameters.updatePasswordRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'updatePasswordRequest',
        'Required parameter requestParameters.updatePasswordRequest was null or undefined when calling updatePassword.',
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
        path: `/user/password`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.updatePasswordRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update password
   * Update password
   */
  async updatePassword(
    updatePasswordRequest: UpdatePasswordRequest,
    initOverrides?: RequestInit,
  ): Promise<void> {
    await this.updatePasswordRaw(
      { updatePasswordRequest: updatePasswordRequest },
      initOverrides,
    );
  }
}
