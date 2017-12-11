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
 * vingère.html
   * TBC

 #### Images
 | Image Name | Location Used | Reference | Image
 |:-------:|:----:|:----------:|:----:|
 |Cryptography-machine.jpg| index.html| [Wikipedia](https://en.wikipedia.org/wiki/Cryptography)|![German cipher machine](images/Cryptography-machine.jpg "German cipher machine")
 |Nsa-headquarters.png| index.html| [Wikipedia](https://en.wikipedia.org/wiki/National_Security_Agency)|![NSA headquarters in Fort Meade, Maryland](images/Nsa-headquarters.png "NSA headquarters in Fort Meade, Maryland")
 |Rsa-decryption.png| index.html| [Javamez](https://www.javamex.com/tutorials/cryptography/rsa_key_length.shtml)|![RSA decryption time by key length graph](images/Rsa-decryption.png "RSA decryption time by key length graph")
 |Key-encryption.png| index.html| [Wikipedia](https://en.wikipedia.org/wiki/Cryptography)|![Symmetric-key cryptography diagram](images/Key-encryption.png "Symmetric-key cryptography diagram")