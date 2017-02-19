let heartbeat = require('../../controller/heartbeat');
let expect = require('chai').expect;
let httpMocks = require('node-mocks-http');
let buildResponse = () => httpMocks.createResponse({eventEmitter: require('events').EventEmitter});

describe('heartbeat controller', () => {
    it('should return OK', done => {
        let response = buildResponse();
        let request  = httpMocks.createRequest({
            method: 'GET',
            url: '/heartbeat',
        });

        response.on('end', function() {
            expect(response._isJSON()).to.be.ok;
            expect(response.statusCode).to.equal(200);
            expect(response.statusMessage).to.equal('OK');
            let data = JSON.parse(response._getData());
            expect(data.message).is.equal('OK');
            done();
        });

        heartbeat.handle(request, response, done);
    });
});
