let string = document.getElementById("user-input");
let num = document.getElementById("user-number");
let sub = document.getElementById("get-input");

sub.addEventListener("submit", function(e)
	{ 
		let out = document.getElementById("user-output").value;
		let str = string.value;
		let amount = parseInt(num.value);
		let output = '';
		for (let i = 0; i < str.length; i ++)
		{
			let chars = str[i];
			if (chars.match(/[a-z]/i) || chars.match(' '))
			{
				//decalres variable name for iterator
				let code = str.charCodeAt(i);
				//Changes Uppercase letters	
				if ((code >= 65) && (code <=90))
				{
					chars = String.fromCharCode((code - 65 + amount)+ 65);
					output += chars;
				}
				//Changes Lowercase letters
				else if ((code >=97) && (code <=122))
				{	
					chars = String.fromCharCode((code - 97 + amount)+ 97);
					output += chars;
				}				
				else if ( code == 32)
				{
					chars = String.fromCharCode(160);
					output += chars;
				}
			}
			document.getElementById("user-output").innerHTML = output;	
		}
		e.preventDefault();
	}, false);