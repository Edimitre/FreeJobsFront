import { ByPassSecurityPipe } from './by-pass-security.pipe';

describe('ByPassSecurityPipe', () => {
  it('create an instance', () => {
    const pipe = new ByPassSecurityPipe();
    expect(pipe).toBeTruthy();
  });
});
