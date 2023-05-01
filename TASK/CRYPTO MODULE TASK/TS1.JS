const crypto = require('crypto');

// Generate a random salt
const salt = crypto.randomBytes(16).toString('hex');

// Hash the password with the salt using PBKDF2
const password = 'KRUNAL';
const iterations = 10000;
const keyLength = 64;
const digest = 'sha512';
crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
  if (err) throw err;
  const hashedPassword = derivedKey.toString('hex');
  console.log(`KRUNAL: ${salt}`);
  console.log(`Hashed Password: ${hashedPassword}`);
});

//we use the crypto.pbkdf2() function to hash the password with the salt. PBKDF2 is a password-based key derivation function that uses a repeated process to strengthen the hash and make it more resistant to attacks. We specify the number of iterations, key length, and digest algorithm to use.
