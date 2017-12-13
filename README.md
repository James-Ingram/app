**For best results, use GitHub to veiw**
## User Testing 

- Changed text to make it more readable, as my parent couldn't read it easily.
- Added images to break up mass of text
- Fixed width issue, pages can no longer scoll to the sides

## Issues 

 | Problem | File(s) | Resolution |  
 |:-------:|:----:|:----------:|
 |Outputting text to html|caesar.js| Adjusted incorrect eventlistner 
 |Incorrect values put on page e.g. ["undefinedf!"]|Caesar.js| Corrected variable to have .value after document.get 
 |Singular letter printed on page |caesar.js| Moved `output += chars;` to within the individual `if` statements
 |Spaces were not beind displayed properly|caesar.js| Sanitization was too strict add `chars.match(' ')` to allow for spaces to be checked.
 |Double background filling, double border wrap| caesar.html styles.css| Changed labels and class names to avoid duplicate stylings
 |Large amounts of text break stylings and even larger break the JS (e.g. Bee Movie Script)|caesar.js caesar.html| introduced `maxlength="80"` to prevent overflow

 ## References
 #### Text
 * index.html
   * https://en.wikipedia.org/wiki/Cryptography
 * caesar.html
   * https://en.wikipedia.org/wiki/Caesar_cipher#History_and_usage
 * route.html
   * http://crypto.interactive-maths.com/route-cipher.html
   * https://en.wikipedia.org/wiki/Transposition_cipher
   * http://www.crypto-it.net/eng/simple/route-cipher.html?tab=1
 * vingère.html
   * https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher

 #### Images
 | Image Name | Location Used | Reference | Image
 |:-------:|:----:|:----------:|:----:|
 |Cryptography-machine.jpg| index.html| [Wikipedia](https://en.wikipedia.org/wiki/Cryptography)|![German cipher machine](images/Cryptography-machine.jpg "German cipher machine")
 |Nsa-headquarters.png| index.html| [Wikipedia](https://en.wikipedia.org/wiki/National_Security_Agency)|![NSA headquarters in Fort Meade, Maryland](images/Nsa-headquarters.png "NSA headquarters in Fort Meade, Maryland")
 |Rsa-decryption.png| index.html| [Javamex](https://www.javamex.com/tutorials/cryptography/rsa_key_length.shtml)|![RSA decryption time by key length graph](images/Rsa-decryption.png "RSA decryption time by key length graph")
 |Key-encryption.png| index.html| [Wikipedia](https://en.wikipedia.org/wiki/Cryptography)|![Symmetric-key cryptography diagram](images/Key-encryption.png "Symmetric-key cryptography diagram")
 |Julius-caesar.jpg|caesar.html|[Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)|![Julius Caesar](images/Julius-caesar.jpg)
 |Caesar-cipher.png|caesar.html|[Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)|
 |Magnify-code.jpg|caesar.html|[Extreme Tech](https://www.extremetech.com/computing/137606-new-encryption-method-avoids-hacks-by-saving-your-password-in-multiple-locations)|![A magnifying glass and some code](images/Magnify-code.jpg)
 |Bernardo-provenzano.jpg|caesar.html|[Time](http://content.time.com/time/specials/2007/article/0,28804,1683530_1683532_1683538,00.html)|![Bernardo provenzano](images/Bernardo-provenzano.jpg)
 |Route-solution.png|route.html|[Improbable Escapes](https://www.improbableescapes.com/game-props/route-cipher-4-letter-lock-book)|![Solution of a route cipher](images/Route-solution.png)
 |Place-holder.png|route.html|[PlaceHolder](http://via.placeholder.com/250x250)|![PlaceHolder](images/Place-holder.png)
 |Frequency-analysis.png|route.html|[Jimblog](http://www.cromulentrambling.com/2014/01/a-look-at-second-feynman-cipher.html)|![Frequency analysis graph](images/Frequency-analysis.png)
 |Sliding-rule.jpg|vingère.html|[Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)|![Cryptographic slide rule](images/Sliding-rule.jpg)
 |Blaise-vigenère.png|vingère.html|[Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)|![Blaise de Vigenère](images/Blaise-vigenère.png)
 |Cipher-disc.jpg|vingère.html|[Cryptomuseum](http://www.cryptomuseum.com/crypto/vigenere/)|![Vigenère cipher disc](images/Cipher-disc.jpg)
 |Vigenère-table.png|vingère.html|[Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)|![The Vigenère square or Vigenère table](images/Vigenère-table.png)