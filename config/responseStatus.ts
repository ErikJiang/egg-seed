
export enum HttpStatus {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
}

export interface IRespMessage {
    httpStatus: HttpStatus;
    code: number;
    message: string;
}

export class RespStatus {
    public static SUCCESS: IRespMessage = { httpStatus: HttpStatus.OK, code: 2000001, message: '请求成功.' };
    public static SIGNUP_SUCCESS: IRespMessage = { httpStatus: HttpStatus.CREATED, code: 2010001, message: '账号注册成功.' };
    public static REQ_PARAM_ERR: IRespMessage = { httpStatus: HttpStatus.BAD_REQUEST, code: 4000001, message: '请求参数错误.' };
    public static USER_AUTH_FAIL: IRespMessage = { httpStatus: HttpStatus.UNAUTHORIZED, code: 4010001, message: '用户认证失败.' };
    public static NAME_PASSWD_ERR: IRespMessage = { httpStatus: HttpStatus.UNAUTHORIZED, code: 4010002, message: '登录用户名或密码有误.' };
    public static USER_NOT_FOUND: IRespMessage = { httpStatus: HttpStatus.NOT_FOUND, code: 4040001, message: '该用户信息未找到.' };
    public static SERV_INSIDE_ERR: IRespMessage = { httpStatus: HttpStatus.INTERNAL_SERVER_ERROR, code: 5000001, message: '服务端内部错误.' };
}
