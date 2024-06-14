import Email from './email.value-object';

describe('Email Value Object', () => {
    const validValues: any = ['teste@123.com', 'teste@sla.uol'];
    const invalidValues: any = [
        'teste',
        123,
        '@tt',
        'teste @test.tt',
        ' teste@test.tt',
        ' teste@test. tt',
        ' teste@test .tt',
        'teste@test.tt.tt',
        'teste@123',
        undefined,
        null,
    ];

    it.each(validValues)('Should be valid', (validValue) => {
        const email = new Email(validValue);
        expect(email.value).toBe(validValue);
    });

    it.each(invalidValues)('should throw', (invalidValue) => {
        expect(() => new Email(invalidValue)).toThrow();
    });
});
