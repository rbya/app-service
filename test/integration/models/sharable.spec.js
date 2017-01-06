describe('SharableModel', function() {
    it('should be able to share something', function(done) {
        Sharable.find()
            .then(function(results) {
                expect(results.length).to.be(0);
                done();
            }).catch(done);
    })
})