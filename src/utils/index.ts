export * from './validators';

export const debug = (label: string) => (...args: any[]): void => {
  if (process.env.NODE_ENV === 'test') return;
  console.log(`${label}:`, ...args);
};

export const signJwt = async (id: string, email: string) => {
  const jwt = await import('jsonwebtoken');
  const token = jwt.sign({ id, email }, process.env.JWT_KEY!);
  const session = { jwt: token };

  return session;
};
