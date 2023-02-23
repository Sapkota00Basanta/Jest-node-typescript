import { Request, Response, NextFunction } from 'express';

const allowCrossDomian = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  _next();
};

export default allowCrossDomian;
