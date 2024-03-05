import {
    USER_LOCALSTORAGE_ACCESS_TOKEN_KEY,
    USER_SESSIONSTORAGE_CODE_VERIFIER_KEY
} from "../../../../shared/const/localStorageConsts.ts";
import {API_URI, REDIRECT_URI} from "../../../../shared/const/apiConsts.ts";
import {$api} from "../../../../shared/api/api.ts";
import {checkAccessTokenAction, logoutAction, setAuthDataAction} from "../slice/userReducer.ts";


// LOGOUT
export const logout = () => {
    return (dispatch) => {
        const formData = new FormData();
        formData.append('token', String(localStorage.getItem(USER_LOCALSTORAGE_ACCESS_TOKEN_KEY)));

        $api.post('/oauth2/revoke',
            formData,
            {
                withCredentials: true,
                headers: {
                    'Content-type': 'application/url-form-encoded',
                    Authorization: 'Basic ' + btoa('client:secret'),
                },
            }
        )
            .then((res) => {
                console.log(res.data)
                localStorage.removeItem(USER_LOCALSTORAGE_ACCESS_TOKEN_KEY);
                dispatch(logoutAction());
            })
            .catch((e) => {
                console.log(e)
            })
    }
}


// CHECK ACCESS TOKEN
export const checkAccessToken = () => {
    return (dispatch) => {

        const formData = new FormData();
        formData.append('token', String(localStorage.getItem(USER_LOCALSTORAGE_ACCESS_TOKEN_KEY)));

        $api.post('/oauth2/introspect',
            formData,
            {
                withCredentials: true,
                headers: {
                    'Content-type': 'application/url-form-encoded',
                    Authorization: 'Basic ' + btoa('client:secret'),
                },
            }
        )
            .then((res) => {

                console.log(res.data)
                if (res.data.active === true) {
                    dispatch(checkAccessTokenAction(true));
                } else {
                    dispatch(checkAccessTokenAction(false));
                }
            })
            .catch((e) => {
                console.log(e)
            })

    }
}

// GET ACCESS TOKEN
export const getAccessToken = (authorizationCode: string) => {
    return (dispatch) => {


        const formData = new FormData();
        formData.append('grant_type', 'authorization_code');
        formData.append('code', authorizationCode);
        formData.append('redirect_uri', REDIRECT_URI);
        formData.append('client_id', 'client');
        formData.append('code_verifier', String(sessionStorage.getItem(USER_SESSIONSTORAGE_CODE_VERIFIER_KEY)));

        $api.post(
            '/oauth2/token',
            formData,

            {
                withCredentials: true,
                headers: {
                    'Content-type': 'application/url-form-encoded',
                    Authorization: 'Basic ' + btoa('client:secret'),
                },
            }
        )
            .then((res) => {
                console.log(res.data)
                if (res.data.access_token) {

                    window.localStorage.setItem(USER_LOCALSTORAGE_ACCESS_TOKEN_KEY, res.data.access_token);
                    dispatch(setAuthDataAction());
                    // window.location = '/';

                }
            })
            .catch((e) => {
                console.log(e)
            });
    }
}


// GET AUTHORIZATION CODE
export const getAuthCode = () => {
    const codeVerifier = generateRandomString(64);
    window.sessionStorage.setItem(USER_SESSIONSTORAGE_CODE_VERIFIER_KEY, codeVerifier);

    Promise.resolve()
        .then(() => {
            return generateCodeChallenge(codeVerifier);
        })
        .then(function (codeChallenge) {
            const args = new URLSearchParams({
                response_type: 'code',
                client_id: 'client',
                redirect_uri: REDIRECT_URI,
                state: '1234zyx',
                code_challenge: codeChallenge,
                code_challenge_method: 'S256',
                scope: 'openid',
            });
            window.location = API_URI + '/oauth2/authorize?' + args;
        })
}

async function generateCodeChallenge (codeVerifier: string) {
    const digest = await crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(codeVerifier)
    );
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

const generateRandomString = (length: number) => {
    let text = '';
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}