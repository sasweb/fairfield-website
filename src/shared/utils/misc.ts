export const removeUndefinedObjectProps = (obj: Record<any, any>) =>
  JSON.parse(JSON.stringify(obj));

export type AnyObject = { [key: string]: string | null | undefined };

export const removeNullUndefinedEmptyString = (obj: AnyObject): AnyObject => {
  const cleanedObject: AnyObject = {};

  for (const key in obj) {
    const value = obj[key];

    if (value !== null && value !== undefined && value !== '') {
      cleanedObject[key] = value;
    }
  }

  return cleanedObject;
};

export const getDifferenceBetweenObjects = (obj1: AnyObject, obj2: AnyObject): AnyObject => {
  const diff: AnyObject = {};

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      diff[key] = obj1[key];
    }
  }

  return diff;
};

export const isJSON = (str: any) => {
  if (typeof str !== 'string') {
    return false;
  }
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};
