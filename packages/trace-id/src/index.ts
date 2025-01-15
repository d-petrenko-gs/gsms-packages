import cls from 'cls-hooked';
import { Request, Response, NextFunction } from 'express';
import { NAMESPACE_TRACE_ID, TRACE_ID_HEADER_KEY } from './constant';

const createTraceIdNameSpace = () => cls.createNamespace(NAMESPACE_TRACE_ID);

export const getTraceId = (): string => cls.getNamespace(NAMESPACE_TRACE_ID).get('traceId') || 'undefined';

export function traceId(req: Request, res: Response, next: NextFunction): void {
  if (req.method === 'OPTIONS') {
    next();

    return;
  }

  const namespace = createTraceIdNameSpace();

  namespace.bind(req);
  namespace.bind(res);

  const traceIdValue = req.headers[TRACE_ID_HEADER_KEY] || 'undefined';

  namespace.run(() => {
    namespace.set('traceId', traceIdValue);

    next();
  });
}