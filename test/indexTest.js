const { expect } = require('chai');
const { findMatching, fuzzyMatch, matchName } = require('../index.js');

describe('index.js', () => {
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'];

  describe('findMatching()', () => {
    it('returns all drivers that match the passed in name', () => {
      expect(findMatching(drivers, 'Bobby')).to.deep.equal(['Bobby']);
    });

    it('returns matching drivers if case does not match but letters do', () => {
      expect(findMatching(drivers, 'bobby')).to.deep.equal(['Bobby']);
    });

    it('returns an empty array if there is no match', () => {
      expect(findMatching(drivers, 'John')).to.deep.equal([]);
    });
  });

  describe('fuzzyMatch()', () => {
    it('returns a driver if beginning provided letters match', () => {
      expect(fuzzyMatch(drivers, 'Sa')).to.equal('Sammy');
    });

    it('does not return drivers if only middle or ending letters match', () => {
      expect(fuzzyMatch(drivers, 'mm')).to.be.undefined;
      expect(fuzzyMatch(drivers, 'ny')).to.be.undefined;
    });
  });

  describe('matchName()', () => {
    it('accesses the data structure to check if name matches', () => {
      expect(matchName(drivers, 'Bobby')).to.be.true;
      expect(matchName(drivers, 'John')).to.be.false;
    });
  });
});
