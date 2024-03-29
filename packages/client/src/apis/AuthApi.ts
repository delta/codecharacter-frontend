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
  AuthStatusResponse,
  ForgotPasswordRequest,
  GenericError,
  PasswordLoginRequest,
  PasswordLoginResponse,
  ResetPasswordRequest,
} from '../models';

export interface ForgotPasswordOperationRequest {
  forgotPasswordRequest: ForgotPasswordRequest;
}

export interface PasswordLoginOperationRequest {
  passwordLoginRequest: PasswordLoginRequest;
}

export interface ResetPasswordOperationRequest {
  resetPasswordRequest: ResetPasswordRequest;
}

/**
 * AuthApi - interface
 *
 * @export
 * @interface AuthApiInterface
 */
export interface AuthApiInterface {
  /**
   * Request password reset email to be sent when user forgot their password
   * @summary Forgot password
   * @param {ForgotPasswordRequest} forgotPasswordRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  forgotPasswordRaw(
    requestParameters: ForgotPasswordOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Request password reset email to be sent when user forgot their password
   * Forgot password
   */
  forgotPassword(
    forgotPasswordRequest: ForgotPasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void>;

  /**
   * Get authentication status: fully authenticated, activation pending and incomplete profile
   * @summary Get authentication status
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  getAuthStatusRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<AuthStatusResponse>>;

  /**
   * Get authentication status: fully authenticated, activation pending and incomplete profile
   * Get authentication status
   */
  getAuthStatus(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<AuthStatusResponse>;

  /**
   * Login with email and password and get bearer token for authentication
   * @summary Password Login
   * @param {PasswordLoginRequest} passwordLoginRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  passwordLoginRaw(
    requestParameters: PasswordLoginOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PasswordLoginResponse>>;

  /**
   * Login with email and password and get bearer token for authentication
   * Password Login
   */
  passwordLogin(
    passwordLoginRequest: PasswordLoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PasswordLoginResponse>;

  /**
   * Reset password using the token from password reset email
   * @summary Reset password
   * @param {ResetPasswordRequest} resetPasswordRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  resetPasswordRaw(
    requestParameters: ResetPasswordOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>>;

  /**
   * Reset password using the token from password reset email
   * Reset password
   */
  resetPassword(
    resetPasswordRequest: ResetPasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void>;
}

/**
 *
 */
export class AuthApi extends runtime.BaseAPI implements AuthApiInterface {
  /**
   * Request password reset email to be sent when user forgot their password
   * Forgot password
   */
  async forgotPasswordRaw(
    requestParameters: ForgotPasswordOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.forgotPasswordRequest === null ||
      requestParameters.forgotPasswordRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'forgotPasswordRequest',
        'Required parameter requestParameters.forgotPasswordRequest was null or undefined when calling forgotPassword.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/auth/forgot-password`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.forgotPasswordRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Request password reset email to be sent when user forgot their password
   * Forgot password
   */
  async forgotPassword(
    forgotPasswordRequest: ForgotPasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.forgotPasswordRaw(
      { forgotPasswordRequest: forgotPasswordRequest },
      initOverrides,
    );
  }

  /**
   * Get authentication status: fully authenticated, activation pending and incomplete profile
   * Get authentication status
   */
  async getAuthStatusRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<AuthStatusResponse>> {
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
        path: `/auth/status`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Get authentication status: fully authenticated, activation pending and incomplete profile
   * Get authentication status
   */
  async getAuthStatus(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<AuthStatusResponse> {
    const response = await this.getAuthStatusRaw(initOverrides);
    return await response.value();
  }

  /**
   * Login with email and password and get bearer token for authentication
   * Password Login
   */
  async passwordLoginRaw(
    requestParameters: PasswordLoginOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PasswordLoginResponse>> {
    if (
      requestParameters.passwordLoginRequest === null ||
      requestParameters.passwordLoginRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'passwordLoginRequest',
        'Required parameter requestParameters.passwordLoginRequest was null or undefined when calling passwordLogin.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/auth/login/password`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.passwordLoginRequest,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Login with email and password and get bearer token for authentication
   * Password Login
   */
  async passwordLogin(
    passwordLoginRequest: PasswordLoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PasswordLoginResponse> {
    const response = await this.passwordLoginRaw(
      { passwordLoginRequest: passwordLoginRequest },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Reset password using the token from password reset email
   * Reset password
   */
  async resetPasswordRaw(
    requestParameters: ResetPasswordOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.resetPasswordRequest === null ||
      requestParameters.resetPasswordRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'resetPasswordRequest',
        'Required parameter requestParameters.resetPasswordRequest was null or undefined when calling resetPassword.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/auth/reset-password`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.resetPasswordRequest,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Reset password using the token from password reset email
   * Reset password
   */
  async resetPassword(
    resetPasswordRequest: ResetPasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.resetPasswordRaw(
      { resetPasswordRequest: resetPasswordRequest },
      initOverrides,
    );
  }
}
