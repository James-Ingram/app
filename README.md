**For best results, use GitHub to veiw**
##Issues

 | Problem | File | Resolution |  
 |:-------:|:----:|:----------:|
 |Outputting text to html|Caesar.js| Adjusted incorrect eventlistner 
 |Incorrect values put on page e.g. ["undefinedf!"]|Caesar.js| Corrected variable to have .value after document.get 
 |Singular letter printed on page |Caesar.js| Moved `output += chars;` to within the individual `if` statements
 |Spaces were not beind displayed properly|Caesar.js| Sanitization was too strict add `chars.match(' ')` to allow for spaces to be checked.