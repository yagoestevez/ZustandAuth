// Basic way of extending the Express Request object
declare namespace Express {
  export interface Request {
    user: any
  }
}
