// JavaScript Document
function ctrl()
{
	// Natural-Language Understanding (NLU)	
	var main = new Main();
	var date = new DateTime();	
	if (main.issetQuery())
	{
		var msg = main.getQueryFlat();
		if (msg == "hello" || msg == "hi" || msg == "hey" || msg == "how far" || msg == "wassup")
		{
			main.setQueryUser();
			main.setQueryBot("Nothing much. Hey, today is CSC801 presentation, are you offering the course?");
		}
		else if (msg == "yes" || msg == "no")
		{
			main.setQueryUser();
			main.setQueryBot("Okay, that's fine sir.");
		}	
		else
		{
			main.setQueryUser();
			main.setQueryBot("Sorry, as i am currently unable to respond to this enquiry.");
			main.endQuery();
		}
	}
	main.clearQuery();	
}

