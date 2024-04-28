export function minLength(min: number) {
  return (target: any, key: string, descriptor?: PropertyDescriptor) => {
    console.log(descriptor);
    console.log(target);
    console.log(target.get);
    console.log(key);
    console.log(target.constructor);

    if (descriptor && descriptor.set) {
      const originalSetter = descriptor.set;
      descriptor.set = (value: any) => {
        console.log(value);
        if (value.toString().length < min) {
          throw new Error('Min length ' + min.toString());
        }
        originalSetter.call(this, value);
      };
    }
  };
}
