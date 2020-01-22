var expect  = require('chai').expect;
var request = require('request');
var port = process.env.PORT || 3000;

it('Main page content', function(done) {
    this.timeout(60000);    //wait for DB startup

    request('http://api:' + port , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});

it('Main page status', function(done) {
    request('http://api:' + port , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('About page content', function(done) {
    request('http://api:' + port + '/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});