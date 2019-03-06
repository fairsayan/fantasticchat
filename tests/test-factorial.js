describe('factorial function', function() {
  it('of 3 should be 6', function() {
    document.body.innerHTML = __html__['public/index.html']
    document.body.onload = () => {
      expect(factorial(3)).toBe(6)
    }
  })
})

describe('element #first', function () {
  it('is Domenico', function () {
    let first = document.getElementById('first').innerHTML
    expect(first).toBe('Domenico')
  })
})
