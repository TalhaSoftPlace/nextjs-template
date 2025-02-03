import { NextRouter } from 'next/router';
import { Dispatch } from 'react';
import {
  ActionPayload,
  Address,
  AddressTypes,
  ApiResponse,
  AuthenticationState,
  ErrorMessage,
  Header,
  OAuthId,
} from './authEnums';

export interface AuthState {
  [AuthenticationState.userRole]: string | null;
  [AuthenticationState.loading]: boolean;
  [AuthenticationState.error]: string | null;
  [AuthenticationState.email]: boolean | null;
  [AuthenticationState.google]: boolean | null;
  [AuthenticationState.fb]: boolean | null;
  [AuthenticationState.apple]: boolean | null;
}

export interface UserAddress {
  [AddressTypes.primary]?: AddressType;
  [AddressTypes.secondary1]?: AddressType;
  [AddressTypes.secondary2]?: AddressType;
  [AddressTypes.billing]?: AddressType;
}
export interface UserOAuth {
  [OAuthId.apple]: boolean;
  [OAuthId.google]: boolean;
  [OAuthId.facebook]: boolean;
}

export interface AddressType {
  [Address.city]: string;
  [Address.country]: string;
  [Address.streetAddress]: string;
  [Address.houseNumber]: string;
  [Address.postCode]: string;
  [Address.additionalAddress]: string;
  [Address.poBox]: string;
  [Address.emailAddress]: string;
}
export interface ApiResponseType {
  [Header.header]: {
    [Header.accesstoken]: string;
    [Header.refreshtoken]: string;
  };
  [Header.data]: {
    [ApiResponse.success]: boolean;
    [ApiResponse.code]: number;
    [ApiResponse.message]: string;
    [Header.data]: {
      [Header.user]: any;
    };
  };
}

export interface ApiResponseTypePut {
  [Header.header]: {
    [Header.accesstoken]: string;
    [Header.refreshtoken]: string;
  };
  [ApiResponse.success]: boolean;
  [ApiResponse.code]: number;
  [ApiResponse.message]: string;
  [Header.data]: {
    [Header.user]: {};
  };
}

export interface ApiResponseTypeProfile {
  [Header.header]: {
    [Header.accesstoken]: string;
    [Header.refreshtoken]: string;
  };
  [ApiResponse.success]: boolean;
  [ApiResponse.code]: number;
  [ApiResponse.message]: string;
  [Header.data]: AddressType;
}

export interface Action {
  [ActionPayload.type]: string;
  [ActionPayload.payload]: {};
}

export interface ErrorPropType {
  [ErrorMessage.errorMessage]: string;
}

export interface RemoveOAuth {
  router: NextRouter;
  dispatch: Dispatch<any>;
}
