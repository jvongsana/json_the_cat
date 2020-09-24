const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns "Breed not found" when inquiring about an invalid breed', (done) => {
    fetchBreedDescription('Corgi', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "Breed not found";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  // Both test will pass when ran by itself. Sometimes when ran together, one will fail due to a time out (whichever is first). The order has been switched and tested and it always is the first one that fails.
});