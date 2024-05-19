export function isEmail() {
  return (target: any, key: string) => {
    const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(target, key);
    let _value = target[key];
    const getter = () => _value;
    const setter = (value: string) => {
      descriptor?.set(value);
      const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,}){1}$/,
      );

      if (!emailRegex.test(value)) {
        throw new Error('Not a valid email');
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
