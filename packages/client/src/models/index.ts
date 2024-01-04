/* tslint:disable */
/* eslint-disable */
/**
 * Activate user request
 * @export
 * @interface ActivateUserRequest
 */
export interface ActivateUserRequest {
  /**
   *
   * @type {string}
   * @memberof ActivateUserRequest
   */
  token: string;
}
/**
 *
 * @export
 * @interface AuthStatusResponse
 */
export interface AuthStatusResponse {
  /**
   *
   * @type {string}
   * @memberof AuthStatusResponse
   */
  status?: AuthStatusResponseStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum AuthStatusResponseStatusEnum {
  Authenticated = 'AUTHENTICATED',
  ProfileIncomplete = 'PROFILE_INCOMPLETE',
  ActivationPending = 'ACTIVATION_PENDING',
}
/**
 *
 * @export
 * @enum {string}
 */
export enum ChallengeType {
  Code = 'CODE',
  Map = 'MAP',
}
/**
 * Code model
 * @export
 * @interface Code
 */
export interface Code {
  /**
   *
   * @type {string}
   * @memberof Code
   */
  code: string;
  /**
   *
   * @type {Date}
   * @memberof Code
   */
  lastSavedAt: Date;
  /**
   *
   * @type {Language}
   * @memberof Code
   */
  language: Language;
}
/**
 * Code revision model
 * @export
 * @interface CodeRevision
 */
export interface CodeRevision {
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  code: string;
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof CodeRevision
   */
  parentRevision?: string;
  /**
   *
   * @type {Language}
   * @memberof CodeRevision
   */
  language: Language;
  /**
   *
   * @type {Date}
   * @memberof CodeRevision
   */
  createdAt: Date;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum CodeType {
  Normal = 'NORMAL',
  DailyChallenge = 'DAILY_CHALLENGE',
}
/**
 * Model for complete profile request
 * @export
 * @interface CompleteProfileRequest
 */
export interface CompleteProfileRequest {
  /**
   *
   * @type {string}
   * @memberof CompleteProfileRequest
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof CompleteProfileRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CompleteProfileRequest
   */
  country: string;
  /**
   *
   * @type {string}
   * @memberof CompleteProfileRequest
   */
  college: string;
  /**
   *
   * @type {number}
   * @memberof CompleteProfileRequest
   */
  avatarId: number;
}
/**
 * Create code revision request
 * @export
 * @interface CreateCodeRevisionRequest
 */
export interface CreateCodeRevisionRequest {
  /**
   *
   * @type {string}
   * @memberof CreateCodeRevisionRequest
   */
  code: string;
  /**
   *
   * @type {CodeType}
   * @memberof CreateCodeRevisionRequest
   */
  codeType?: CodeType;
  /**
   *
   * @type {string}
   * @memberof CreateCodeRevisionRequest
   */
  message: string;
  /**
   *
   * @type {Language}
   * @memberof CreateCodeRevisionRequest
   */
  language: Language;
}
/**
 * Create map revision request
 * @export
 * @interface CreateMapRevisionRequest
 */
export interface CreateMapRevisionRequest {
  /**
   *
   * @type {string}
   * @memberof CreateMapRevisionRequest
   */
  map: string;
  /**
   *
   * @type {GameMapType}
   * @memberof CreateMapRevisionRequest
   */
  mapType?: GameMapType;
  /**
   *
   * @type {string}
   * @memberof CreateMapRevisionRequest
   */
  mapImage: string;
  /**
   *
   * @type {string}
   * @memberof CreateMapRevisionRequest
   */
  message: string;
}
/**
 * Create match request
 *
 * If mode is SELF: either/both of mapRevisionId and codeRevisionId have to be provided, or else latest code will be used to initiate the match
 * If mode is MANUAL: only opponentUsername should be provided
 * @export
 * @interface CreateMatchRequest
 */
export interface CreateMatchRequest {
  /**
   *
   * @type {MatchMode}
   * @memberof CreateMatchRequest
   */
  mode: MatchMode;
  /**
   * Username of the opponent
   * @type {string}
   * @memberof CreateMatchRequest
   */
  opponentUsername?: string | null;
  /**
   * Revision ID of the map
   * @type {string}
   * @memberof CreateMatchRequest
   */
  mapRevisionId?: string | null;
  /**
   * Revision of the code
   * @type {string}
   * @memberof CreateMatchRequest
   */
  codeRevisionId?: string | null;
}
/**
 * Current user profile model
 * @export
 * @interface CurrentUserProfile
 */
export interface CurrentUserProfile {
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  country: string;
  /**
   *
   * @type {string}
   * @memberof CurrentUserProfile
   */
  college: string;
  /**
   *
   * @type {number}
   * @memberof CurrentUserProfile
   */
  avatarId: number;
  /**
   *
   * @type {number}
   * @memberof CurrentUserProfile
   */
  tutorialLevel: number;
  /**
   *
   * @type {TierType}
   * @memberof CurrentUserProfile
   */
  tier?: TierType;
  /**
   *
   * @type {boolean}
   * @memberof CurrentUserProfile
   */
  isProfileComplete: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CurrentUserProfile
   */
  isTutorialComplete: boolean;
}
/**
 * Get current-user daily challenge
 * @export
 * @interface DailyChallengeGetRequest
 */
export interface DailyChallengeGetRequest {
  /**
   *
   * @type {string}
   * @memberof DailyChallengeGetRequest
   */
  challName: string;
  /**
   *
   * @type {string}
   * @memberof DailyChallengeGetRequest
   */
  description?: string;
  /**
   *
   * @type {DailyChallengeObject}
   * @memberof DailyChallengeGetRequest
   */
  chall: DailyChallengeObject;
  /**
   *
   * @type {ChallengeType}
   * @memberof DailyChallengeGetRequest
   */
  challType: ChallengeType;
  /**
   *
   * @type {boolean}
   * @memberof DailyChallengeGetRequest
   */
  completionStatus?: boolean;
}
/**
 * Response model for daily challenge leaderboard
 * @export
 * @interface DailyChallengeLeaderBoardResponse
 */
export interface DailyChallengeLeaderBoardResponse {
  /**
   *
   * @type {string}
   * @memberof DailyChallengeLeaderBoardResponse
   */
  userName: string;
  /**
   *
   * @type {number}
   * @memberof DailyChallengeLeaderBoardResponse
   */
  score: number;
  /**
   *
   * @type {number}
   * @memberof DailyChallengeLeaderBoardResponse
   */
  avatarId: number;
}
/**
 * Request Model for the daily challenge
 * @export
 * @interface DailyChallengeMatchRequest
 */
export interface DailyChallengeMatchRequest {
  /**
   *
   * @type {string}
   * @memberof DailyChallengeMatchRequest
   */
  value: string;
  /**
   *
   * @type {Language}
   * @memberof DailyChallengeMatchRequest
   */
  language?: Language;
}
/**
 * The object describing the challenge for the day
 * @export
 * @interface DailyChallengeObject
 */
export interface DailyChallengeObject {
  /**
   *
   * @type {string}
   * @memberof DailyChallengeObject
   */
  cpp?: string;
  /**
   *
   * @type {string}
   * @memberof DailyChallengeObject
   */
  java?: string;
  /**
   *
   * @type {string}
   * @memberof DailyChallengeObject
   */
  python?: string;
  /**
   *
   * @type {string}
   * @memberof DailyChallengeObject
   */
  image?: string;
}
/**
 * Forgot password request
 * @export
 * @interface ForgotPasswordRequest
 */
export interface ForgotPasswordRequest {
  /**
   *
   * @type {string}
   * @memberof ForgotPasswordRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof ForgotPasswordRequest
   */
  recaptchaCode?: string;
}
/**
 * Game model
 * @export
 * @interface Game
 */
export interface Game {
  /**
   *
   * @type {string}
   * @memberof Game
   */
  id: string;
  /**
   *
   * @type {number}
   * @memberof Game
   */
  destruction: number;
  /**
   *
   * @type {number}
   * @memberof Game
   */
  coinsUsed: number;
  /**
   *
   * @type {GameStatus}
   * @memberof Game
   */
  status: GameStatus;
}
/**
 * GameMap model
 * @export
 * @interface GameMap
 */
export interface GameMap {
  /**
   *
   * @type {string}
   * @memberof GameMap
   */
  map: string;
  /**
   *
   * @type {string}
   * @memberof GameMap
   */
  mapImage: string;
  /**
   *
   * @type {Date}
   * @memberof GameMap
   */
  lastSavedAt: Date;
}
/**
 * GameMap revision model
 * @export
 * @interface GameMapRevision
 */
export interface GameMapRevision {
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  map: string;
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  parentRevision?: string;
  /**
   *
   * @type {Date}
   * @memberof GameMapRevision
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof GameMapRevision
   */
  message: string;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum GameMapType {
  Normal = 'NORMAL',
  DailyChallenge = 'DAILY_CHALLENGE',
}
/**
 *
 * @export
 * @enum {string}
 */
export enum GameStatus {
  Idle = 'IDLE',
  Executing = 'EXECUTING',
  Executed = 'EXECUTED',
  ExecuteError = 'EXECUTE_ERROR',
}
/**
 * Model for Generic Error
 * @export
 * @interface GenericError
 */
export interface GenericError {
  /**
   *
   * @type {string}
   * @memberof GenericError
   */
  message?: string;
}
/**
 * Language of source files
 * @export
 * @enum {string}
 */
export enum Language {
  C = 'C',
  Cpp = 'CPP',
  Java = 'JAVA',
  Python = 'PYTHON',
}
/**
 * Leaderboard entry model
 * @export
 * @interface LeaderboardEntry
 */
export interface LeaderboardEntry {
  /**
   *
   * @type {PublicUser}
   * @memberof LeaderboardEntry
   */
  user: PublicUser;
  /**
   *
   * @type {UserStats}
   * @memberof LeaderboardEntry
   */
  stats: UserStats;
}
/**
 * Get map image and map by commitId
 * @export
 * @interface MapCommitByCommitIdResponse
 */
export interface MapCommitByCommitIdResponse {
  /**
   *
   * @type {string}
   * @memberof MapCommitByCommitIdResponse
   */
  mapImage: string;
  /**
   *
   * @type {string}
   * @memberof MapCommitByCommitIdResponse
   */
  map: string;
}
/**
 * Match model
 * @export
 * @interface Match
 */
export interface Match {
  /**
   *
   * @type {string}
   * @memberof Match
   */
  id: string;
  /**
   *
   * @type {Set<Game>}
   * @memberof Match
   */
  games: Set<Game>;
  /**
   *
   * @type {MatchMode}
   * @memberof Match
   */
  matchMode: MatchMode;
  /**
   *
   * @type {Verdict}
   * @memberof Match
   */
  matchVerdict: Verdict;
  /**
   *
   * @type {Date}
   * @memberof Match
   */
  createdAt: Date;
  /**
   *
   * @type {PublicUser}
   * @memberof Match
   */
  user1: PublicUser;
  /**
   *
   * @type {PublicUser}
   * @memberof Match
   */
  user2?: PublicUser;
}
/**
 * Match Mode
 * @export
 * @enum {string}
 */
export enum MatchMode {
  Self = 'SELF',
  Manual = 'MANUAL',
  Auto = 'AUTO',
  Dailychallenge = 'DAILYCHALLENGE',
}
/**
 * Notification model
 * @export
 * @interface Notification
 */
export interface Notification {
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof Notification
   */
  content: string;
  /**
   *
   * @type {Date}
   * @memberof Notification
   */
  createdAt: Date;
  /**
   *
   * @type {boolean}
   * @memberof Notification
   */
  read: boolean;
}
/**
 * Password Login request
 * @export
 * @interface PasswordLoginRequest
 */
export interface PasswordLoginRequest {
  /**
   *
   * @type {string}
   * @memberof PasswordLoginRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof PasswordLoginRequest
   */
  password: string;
}
/**
 * Login response with user token
 * @export
 * @interface PasswordLoginResponse
 */
export interface PasswordLoginResponse {
  /**
   * Bearer token
   * @type {string}
   * @memberof PasswordLoginResponse
   */
  token: string;
}
/**
 * Public user model
 * @export
 * @interface PublicUser
 */
export interface PublicUser {
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  country: string;
  /**
   *
   * @type {TierType}
   * @memberof PublicUser
   */
  tier: TierType;
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  college: string;
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  avatarId: number;
}
/**
 * Rating history model
 * @export
 * @interface RatingHistory
 */
export interface RatingHistory {
  /**
   *
   * @type {number}
   * @memberof RatingHistory
   */
  rating: number;
  /**
   *
   * @type {number}
   * @memberof RatingHistory
   */
  ratingDeviation: number;
  /**
   *
   * @type {Date}
   * @memberof RatingHistory
   */
  validFrom: Date;
}
/**
 * Register user request
 * @export
 * @interface RegisterUserRequest
 */
export interface RegisterUserRequest {
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  passwordConfirmation: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  country: string;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  college: string;
  /**
   *
   * @type {number}
   * @memberof RegisterUserRequest
   */
  avatarId: number;
  /**
   *
   * @type {string}
   * @memberof RegisterUserRequest
   */
  recaptchaCode: string;
}
/**
 * Reset password request
 * @export
 * @interface ResetPasswordRequest
 */
export interface ResetPasswordRequest {
  /**
   *
   * @type {string}
   * @memberof ResetPasswordRequest
   */
  token: string;
  /**
   *
   * @type {string}
   * @memberof ResetPasswordRequest
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof ResetPasswordRequest
   */
  passwordConfirmation: string;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum TierType {
  TierPractice = 'TIER_PRACTICE',
  Tier1 = 'TIER1',
  Tier2 = 'TIER2',
  Tier3 = 'TIER3',
  Tier4 = 'TIER4',
}
/**
 * The object containing the code for the tutorial
 * @export
 * @interface TutorialCodeObject
 */
export interface TutorialCodeObject {
  /**
   *
   * @type {string}
   * @memberof TutorialCodeObject
   */
  cpp?: string;
  /**
   *
   * @type {string}
   * @memberof TutorialCodeObject
   */
  java?: string;
  /**
   *
   * @type {string}
   * @memberof TutorialCodeObject
   */
  python?: string;
  /**
   *
   * @type {string}
   * @memberof TutorialCodeObject
   */
  image?: string;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum TutorialUpdateType {
  Next = 'NEXT',
  Previous = 'PREVIOUS',
  Skip = 'SKIP',
  Reset = 'RESET',
}
/**
 * Get the game tutorials
 * @export
 * @interface TutorialsGetRequest
 */
export interface TutorialsGetRequest {
  /**
   *
   * @type {number}
   * @memberof TutorialsGetRequest
   */
  tutorialId?: number;
  /**
   *
   * @type {string}
   * @memberof TutorialsGetRequest
   */
  tutorialName: string;
  /**
   *
   * @type {ChallengeType}
   * @memberof TutorialsGetRequest
   */
  tutorialType?: ChallengeType;
  /**
   *
   * @type {string}
   * @memberof TutorialsGetRequest
   */
  description?: string;
  /**
   *
   * @type {TutorialCodeObject}
   * @memberof TutorialsGetRequest
   */
  tutorialCodes: TutorialCodeObject;
}
/**
 * Update current user profile request
 * @export
 * @interface UpdateCurrentUserProfile
 */
export interface UpdateCurrentUserProfile {
  /**
   *
   * @type {string}
   * @memberof UpdateCurrentUserProfile
   */
  name?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateCurrentUserProfile
   */
  country?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateCurrentUserProfile
   */
  college?: string | null;
  /**
   *
   * @type {number}
   * @memberof UpdateCurrentUserProfile
   */
  avatarId?: number | null;
  /**
   *
   * @type {TutorialUpdateType}
   * @memberof UpdateCurrentUserProfile
   */
  updateTutorialLevel?: TutorialUpdateType;
}
/**
 * Update latest code request
 * @export
 * @interface UpdateLatestCodeRequest
 */
export interface UpdateLatestCodeRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateLatestCodeRequest
   */
  code: string;
  /**
   *
   * @type {CodeType}
   * @memberof UpdateLatestCodeRequest
   */
  codeType?: CodeType;
  /**
   *
   * @type {boolean}
   * @memberof UpdateLatestCodeRequest
   */
  lock?: boolean;
  /**
   *
   * @type {Language}
   * @memberof UpdateLatestCodeRequest
   */
  language: Language;
}
/**
 * Update latest map request
 * @export
 * @interface UpdateLatestMapRequest
 */
export interface UpdateLatestMapRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateLatestMapRequest
   */
  map: string;
  /**
   *
   * @type {GameMapType}
   * @memberof UpdateLatestMapRequest
   */
  mapType?: GameMapType;
  /**
   *
   * @type {string}
   * @memberof UpdateLatestMapRequest
   */
  mapImage: string;
  /**
   *
   * @type {boolean}
   * @memberof UpdateLatestMapRequest
   */
  lock?: boolean;
}
/**
 * Update password request
 * @export
 * @interface UpdatePasswordRequest
 */
export interface UpdatePasswordRequest {
  /**
   *
   * @type {string}
   * @memberof UpdatePasswordRequest
   */
  oldPassword: string;
  /**
   *
   * @type {string}
   * @memberof UpdatePasswordRequest
   */
  password: string;
  /**
   *
   * @type {string}
   * @memberof UpdatePasswordRequest
   */
  passwordConfirmation: string;
}
/**
 * User stats model
 * @export
 * @interface UserStats
 */
export interface UserStats {
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  rating: number;
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  wins: number;
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  losses: number;
  /**
   *
   * @type {number}
   * @memberof UserStats
   */
  ties: number;
}
/**
 * Match/Game verdict
 * @export
 * @enum {string}
 */
export enum Verdict {
  Player1 = 'PLAYER1',
  Player2 = 'PLAYER2',
  Tie = 'TIE',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
}
