/// 1xx – Informational (Rare but Real)

Code	             Meaning	                              Use Case Example
100                	 Continue	                      Client can continue sending request (not common)
101	                 Switching                             Protocols Used in WebSocket upgrades
103	                 Early Hints	                  Browser can preload resources before full response

//Rarely used in Express apps, but good to know!

/// 2xx – Extra Success Codes
Code	              Meaning	                                   Use Case Example
202	                 Accepted	                        Request accepted but processing later (async)
206	               Partial Content	                    Used in video/audio streaming (range requests)


res.status(202).json({ message: "We received your request and will process it soon." });

/// 3xx – Redirection Codes (Use in Auth, SEO)

Code	        Meaning	                          Use Case Example
302	       Found (Temporary)	            Temporary redirect after login
307        Temporary Redirect	           POST-safe redirect (doesn't change method)
308        Permanent Redirect	         Like 301 but preserves request method and body

res.redirect(302, '/login'); // Send user temporarily to login page

/// 4xx – More Client Errors

Code	  Meaning	                                      When to Use
406 	Not Acceptable	                  Client requested an unsupported response format
408	    Request Timeout                  	Client took too long to send request
410	       Gone	                         Resource was there before, now permanently removed
415	  Unsupported Media Type	        Uploading an image, but type is not accepted (like .exe)
422	   Unprocessable Entity	           Semantic error (valid JSON, but logic is wrong)


res.status(422).json({ message: "Username must not contain emojis." });

/// 5xx – More Server Errors

Code     	Meaning                       	       When to Use
507	    Insufficient Storage	        Server ran out of storage (file uploads, DB issue)
510	      Not Extended	                Client must provide more extensions to proceed

