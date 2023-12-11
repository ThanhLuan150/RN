// Tiếp tục danh sách các mã HTTP status code:

// 1xx (Tiếp tục - Informational):
// - 100: Continue
// - 101: Switching Protocols
// - 102: Processing

// 2xx (Thành công - Success):
// - 200: OK
// - 201: Created
// - 202: Accepted
// - 203: Non-Authoritative Information
// - 204: No Content
// - 205: Reset Content
// - 206: Partial Content
// - 207: Multi-Status
// - 208: Already Reported
// - 226: IM Used

// 3xx (Chuyển hướng - Redirection):
// - 300: Multiple Choices
// - 301: Moved Permanently
// - 302: Found
// - 303: See Other
// - 304: Not Modified
// - 305: Use Proxy
// - 307: Temporary Redirect
// - 308: Permanent Redirect

// 4xx (Lỗi từ phía người dùng - Client Error):
// - 400: Bad Request
// - 401: Unauthorized
// - 402: Payment Required
// - 403: Forbidden
// - 404: Not Found
// - 405: Method Not Allowed
// - 406: Not Acceptable
// - 407: Proxy Authentication Required
// - 408: Request Timeout
// - 409: Conflict
// - 410: Gone
// - 411: Length Required
// - 412: Precondition Failed
// - 413: Payload Too Large
// - 414: URI Too Long
// - 415: Unsupported Media Type
// - 416: Range Not Satisfiable
// - 417: Expectation Failed
// - 418: I'm a teapot
// - 421: Misdirected Request
// - 422: Unprocessable Entity
// - 423: Locked
// - 424: Failed Dependency
// - 425: Too Early
// - 426: Upgrade Required
// - 428: Precondition Required
// - 429: Too Many Requests
// - 431: Request Header Fields Too Large
// - 451: Unavailable For Legal Reasons

// 5xx (Lỗi từ phía máy chủ - Server Error):
// - 500: Internal Server Error
// - 501: Not Implemented
// - 502: Bad Gateway
// - 503: Service Unavailable
// - 504: Gateway Timeout
// - 505: HTTP Version Not Supported
// - 506: Variant Also Negotiates
// - 507: Insufficient Storage
// - 508: Loop Detected
// - 510: Not Extended
// - 511: Network Authentication Required

//

// 1xx (Thông tin):

// 100: Tiếp tục
// 101: Chuyển giao giao thức
// 102: Đang xử lý
// 2xx (Thành công):

// 200: OK  request thif tra về thành công
// 201: Đã tạo
// 202: Đã chấp nhận
// 204: Không có nội dung
// 206: Gửi một phần nội dung
// 3xx (Chuyển hướng):

// 300: Nhiều lựa chọn
// 301: Đã chuyển hướng vĩnh viễn
// 302: Đã tìm thấy
// 304: Không có sửa đổi
// 307: Chuyển hướng tạm thời
// 308: Chuyển hướng vĩnh viễn
// 4xx (Lỗi từ phía người dùng):

// 400: Yêu cầu không hợp lệ
// 401: Không được phép
// 403: Bị từ chối truy cập
// 404: Không tìm thấy
// 405: Phương thức không được phép
// 408: Hết thời gian yêu cầu
// 409: Xung đột
// 410: Đã mất
// 429: Quá nhiều yêu cầu
// 5xx (Lỗi từ phía máy chủ):


// 1xx (Thông tin):

// 100: Tiếp tục
// 101: Chuyển giao giao thức
// 102: Đang xử lý
// 2xx (Thành công):

// 200: OK
// 201: Đã tạo
// 202: Đã chấp nhận
// 204: Không có nội dung
// 206: Gửi một phần nội dung

// 3xx (Chuyển hướng):

// 300: Nhiều lựa chọn
// 301: Đã chuyển hướng vĩnh viễn
// 302: Đã tìm thấy
// 304: Không có sửa đổi
// 307: Chuyển hướng tạm thời
// 308: Chuyển hướng vĩnh viễn
// 4xx (Lỗi từ phía người dùng):
//4XX lỖI CLINDE

// 400: Yêu cầu không hợp lệ
// 401: Không được phép
// 403: Bị từ chối truy cập
// 404: Không tìm thấy
// 405: Phương thức không được phép
// 408: Hết thời gian yêu cầu
// 409: Xung đột  token của em mà dùng token của tk khác sẽ sinh ra conflit
// 410: Đã mất
// 429: Quá nhiều yêu cầu

// 5xx (Lỗi từ phía máy chủ):

// 500: Lỗi máy chủ nội bộ // lỗi từ tk code ra 
// 501: Chưa được thực hiện
// 502: Cổng không hợp lệ // sập serve hoặc serve chưa start lên
// 503: Dịch vụ không khả dụng
// 504: Hết thời gian cổng
// 505: Phiên bản HTTP không được hỗ trợ