const helloWorld = require('./helloWorld'); // importing helloWorld file

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
