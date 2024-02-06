
 import dotenv from 'dotenv'; dotenv.config() 
 import { Configuration, OpenAIApi } from "openai";

// 09.1 Set OpenAI API_KEY
// -------------------------------------------------
    var pConfiguration = new Configuration(
         { apiKey      : process.env.OPENAI_API_KEY
//	     , organization: process.env.OPENAI_ORG
           } );

// 09.2 Run test of OpenAI createCompletion
// -------------------------------------------------
    var pOpenAI = new OpenAIApi( pConfiguration );
    var pResponse  = await pOpenAI.createCompletion(
	    { model       : "davinci-002"     					        // .(40204.9.2 RAM Deprecated: text-davinci-003)
	    , prompt      : "Say this is a test"
	    , max_tokens  :  7
	    , temperature :  0
          } );

        console.log( pResponse.data.choices[0].text );