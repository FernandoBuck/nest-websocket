export function isEmail() {
  return (target: any, key: string) => {
    let _value = target[key];
    const getter = () => _value;
    const setter = (value: string) => {
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
    });
  };
}
