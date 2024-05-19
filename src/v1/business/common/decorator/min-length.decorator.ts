export function minLength(min: number) {
  return (target: any, key: string) => {
    const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(target, key);
    let _value = target[key];
    const getter = () => _value;
    const setter = (value: any) => {
      descriptor?.set(value);
      if (value.toString().length < min) {
        throw new Error('Min length ' + min.toString());
      }
      _value = value;
    };


    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true
    });
  };
}
