describe('element #first', function () {
  it('is Domenico', function () {
    document.body.innerHTML = __html__['public/index.html']
    expect(first.innerHTML).toBe('Domenico')    
  })
})
