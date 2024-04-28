export function maxLength(max: number) {
  return (target: any, key: string) => {
    let _value = target[key];
    const getter = () => _value;
    const setter = (value: string) => {
      console.log(value);
      if (value.toString().length > max) {
        throw new Error('Max length' + max.toString());
      }
      _value = value;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}
