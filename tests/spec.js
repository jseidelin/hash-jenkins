/* eslint-env mocha */

"use strict";

const Jenkins = require("../jenkins.js");
const expect = require("expect");

describe("Jenkins", function() {

    beforeEach(function() {

    });

    it("should calculate lookup2 hashes", function() {
        expect(Jenkins.lookup2("foobar")).toEqual(0x9D3FFA02);
        expect(Jenkins.lookup2("")).toEqual(0);
        expect(Jenkins.lookup2("hello world")).toEqual(0x1AA919E6);
        expect(Jenkins.lookup2("           ")).toEqual(0xF55976FA);
        expect(Jenkins.lookup2("1234567890abcdefghijklmnopqstuvwxyz")).toEqual(0x49EAEE3E);
        expect(Jenkins.lookup2("This is the time for all good men to come to the aid of their country")).toEqual(0xCF874E3D);
        
    });

    it("should calculate one-at-a-time hashes", function() {
        expect(Jenkins.oaat("foobar")).toEqual(0xF952FDE7);
        expect(Jenkins.oaat("")).toEqual(0);
        expect(Jenkins.oaat("hello world")).toEqual(0x3E4A5A57);
        expect(Jenkins.oaat("           ")).toEqual(0x9AEAF441);
        expect(Jenkins.oaat("1234567890abcdefghijklmnopqstuvwxyz")).toEqual(0xB77A0169);
        expect(Jenkins.oaat("This is the time for all good men to come to the aid of their country")).toEqual(0x768ECFFE);
    });


});