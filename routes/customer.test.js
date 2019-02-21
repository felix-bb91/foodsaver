var chai = require("chai"), // , te permite no tener que poner var en todas
    should = chai.should(),// para no tener que andar todo el rato escribiendo chai.ALGO()
    expect = chai.expect,
    chaiHttp = require("chai-http"),
    app = require('../app');

chai.use(chaiHttp);
chai.should();

describe('Customer', function(){
    describe("server responds ok", () => {
        const url = "/customers";
        it('Woow i\'m testing', function (done){
            expect(1).to.equal(1);
            done();
        });
        // Caso GET de la URL correcta
        it('should return a 200', function (done){
            chai.request(app)
                .get(url)
                .set('content-type', 'application/json') // header de la request
                .end((err, res) =>{
                    // res.should.have.status.equal(200)
                    expect(res.status).to.equals(200); // lo que espero 
                    done();
                })

        });
         // Caso GET de la URL INcorrecta
        it('should return a 404', function (done){
            const wrongUrl = "/customer";
            chai.request(app)
                .get(wrongUrl)
                .set('content-type', 'application/json') // header de la request
                .end((err, res) =>{
                    expect(res.status).to.equals(404); // lo que espero 
                    done();
                })

        });
        // Comprobar que si el get funciona,, recibo un array de objetos
        it('should return an array of objects', function (done){
            chai.request(app)
                .get(url)
                .set('content-type', 'application/json') // header de la request
                .end((err, res) =>{
                    expect(res.body).to.be.an('array'); // lo que espero 
                    done();
                })

        });
        // Comprobar que si el get funciona, recibo 20 elementos dentro del array
        it('should return 20 elements', function (done){
            chai.request(app)
                .get(url)
                .set('content-type', 'application/json') // header de la request
                .end((err, res) =>{
                    expect(res.body.length).equal(20); // lo que espero. Body es un array de length 20
                    done();
                })

        });
    });
});