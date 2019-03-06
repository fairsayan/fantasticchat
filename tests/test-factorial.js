describe('element #first', function () {
  it('is Domenico', function () {
    document.body.innerHTML = __html__['public/index.html']
    var first = document.getElementById('first')
    expect(first.innerHTML).toBe('Domenico')    
  })
})

describe('funzione fattoriale', function() {
  it('il fattoriale di 3 è 6', function () {
    expect(factorial(3)).toBe(6)
  })
})