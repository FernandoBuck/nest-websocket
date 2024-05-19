export function maxLength(max: number) {
  return (target: any, key: string) => {
    const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(target, key);
    let _value = target[key];
    const getter = () => _value;
    const setter= (value: any) => {
      descriptor?.set(value);
      if (value.toString().length > max) {
        throw new Error('Max length' + max.toString());
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
