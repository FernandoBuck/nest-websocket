export function isString() {
  return (target: any, key: string) => {
    let _value = target[key];
    const getter = () => _value;
    const setter = (value: string) => {
      console.log(value);
      if (typeof value !== 'string') {
        throw new Error('Not a string');
      }
      _value = value;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}
