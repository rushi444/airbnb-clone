function sum (a: any, b: any) {
    return a + b
}

test('adds to be 3', () => {
  expect(sum(1, 2).toBe(3))
})