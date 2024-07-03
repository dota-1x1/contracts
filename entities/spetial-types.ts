import { z } from 'zod';

export const booleanString = z.preprocess(val => {
  if (val === 'true') return true;
  if (val === 'false') return false;
  return val;
}, z.boolean());

export const numberString = z.preprocess(val => {
  return Number(val);
}, z.number());
