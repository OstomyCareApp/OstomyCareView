let _token: string | null = null;

export function setToken(token: string) {
    _token = token;
}
export function getToken() {
    return _token;
}
export function clearToken() {
    _token = null;
}