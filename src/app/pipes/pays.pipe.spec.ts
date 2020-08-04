import { PaysPipe } from './pays.pipe';

describe('PaysPipe', () => {
  it('create an instance', () => {
    const pipe = new PaysPipe();
    expect(pipe).toBeTruthy();
  });
});
