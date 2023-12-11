const chaiHttp = require("chai-http");
const Server = require("../models/server");
const chai = require("chai");
const { it } = require("mocha");
const expect = require("chai").expect;
const { isHexadecimal, isNumber, isText } = require("../helpers/file-validator");

const server = new Server();
chai.use(chaiHttp);

describe("Files testing", () => {
  
  describe('http', function() {
    it("should get a status code 200", (done) => {
      chai
        .request(server.app)
        .get("/files/data")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it("should have properties file, lines, text, number and hex", (done) => {
      chai
        .request(server.app)
        .get("/files/data")
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body).to.be.a("array");
          res.body.forEach((item) => {
            expect(item).to.be.a("object");
            expect(item).to.have.property("file");
            expect(item).to.have.property("lines");
            item.lines.forEach((line) => {
              expect(line).to.be.a("object");
              expect(line).to.have.property("text");
              expect(line).to.have.property("number");
              expect(line).to.have.property("hex");
            });
          });
          done();
        });
    })
  });

  describe('isHexadecimal', function() {
    it('should return true when given a valid hexadecimal string', function() {
      const result = isHexadecimal('A1B2C3');
      expect(result).to.be.true;
    });
  
    it('should return false when given an invalid hexadecimal string', function() {
      const result = isHexadecimal('G1H2I3');
      expect(result).to.be.false;
    });
  });

  describe('isNumber', function() {
    it('should return true when given a valid number', function() {
      const result = isNumber('123456');
      expect(result).to.be.true;
    });
  
    it('should return false when given an invalid number', function() {
      const result = isNumber('53o7q2');
      expect(result).to.be.false;
    });
  });

  describe('isText', function() {
    it('should return true when given a valid number', function() {
      const result = isText('HFNCJRI');
      expect(result).to.be.true;
    });
  
    it('should return false when given an invalid number', function() {
      const result = isText('ASC48');
      expect(result).to.be.false;
    });
  });

});
