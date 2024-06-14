export function isString() {
    return (target: any, key: string) => {
        const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(
            target,
            key,
        );
        let _value = target[key];
        const getter = () => _value;
        const setter = (value: string) => {
            descriptor?.set(value);
            if (typeof value !== 'string') {
                throw new Error('Not a string');
            }
            _value = value;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            configurable: true,
        });
    };
}
