
      var userName = prompt("What is your name?");//creates the variable userName which will store the user input from the question.
      console.log("userName is " + userName);//displays in the developer console what the user input was.
      var score = 0;//Creates the score variable that equals 0.
      console.log("Current score is : " + score);//displays current score.

      var answerOne = prompt(userName + ", am I from Washington?");//creates the variable which will prompt the question and store the user input.
      console.log("answerOne is " + answerOne);//displays in the developer console what the user input was.
      if (answerOne.toLowerCase() === "yes"){//compares the user input in lowercase to the string yes.
        alert("Great job " + userName + "!");//If the above statement is true this string will be displayed.
        score = (score + 1);//Adds 1 to the score for getting the correct answer.
        console.log ("Current score is : " + score);//displays current score in the console.
      }else if (answerOne.toLowerCase() === "no"){//compares the user input, converted to lower case characters, to the string no.
        alert("Sorry " + userName + " that is incorrect.");//If the above statement is true this string will be displayed.
      }else{//If the user input not 'yes' or 'no' this will run.
        alert("I'm sorry. The only accepted answers are 'yes' and 'no'.");//will be displayed when the above is true.
      }

      var answerTwo = prompt(userName + ", did I work at Sega?");//creates the variable answerTwo which prompts the question and stores the answer in yesNoAnswerTwo.
      console.log("answerTwo is " + answerTwo);//displays the value of answerTwo in the console.
      if (answerTwo.toLowerCase() === "no"){//compares the user input to no
        alert("That is correct " + userName + ".");//if the above statement is true this string will display.
        score = (score + 1);//Adds 1 to the score for getting the correct answer.
        console.log ("Current score is : " + score);//displays the current score in the console.
      }else if (answerTwo.toLowerCase() === "yes"){//compares the user input to yes.
        alert("I did not work at sega.");//if the above statement is true this string will display.
      }else{//if the user input is not yes or no this will run.
        alert("Only 'yes' and 'no' are accepted for this question.");//displays when the above is ture.
      }

      var answerThree = prompt("Is painting one of my hobbies?");//creates the variable answerThree, prompts the question and stores the answer in the variable.
      console.log("answerThree is " + answerThree);//displays in the value of answerThree in the console.
      if (answerThree.toLowerCase() === "yes"){//compares the user input to yes.
        alert("That's right " + userName + " it sure is.");//if the above is true this string will display.
        score = (score + 1);//Adds 1 to the score for getting the correct answer.
        console.log ("Current score is : " + score);//displays the score in the console.
      }else if (answerThree.toLowerCase() === "no"){//compares the user input to no.
        alert("Actually it is one of my hobbies.");//if the above is true this string will display.
      }else{//if the answer is not yes and is also not no this will run.
        alert("Sorry only 'yes' and 'no' are recognized.");//this string displays if the above is true.
      }

      alert("You got " + score + " out of 3 right." + "");

      var age = parseInt(prompt("How old am I?"));//Prompts the question. The user input will equal age.
      console.log("age is " +age);//displays the user input in the console.
      if (age === 29){//Compares user input and 29.
        alert("That's right I am " + age + " years old.");//If the above user input is true this message will be displayed.
      }else if (age < 29){//Checks to see if the user input is less than 29.
        alert("Sorry, " + age + " is too young.");//If the above is true this message will be displayed.
      }else if (age > 29){//If the user input is greater than 29.
        alert("Sorry, " + age + " is too old.");//This message displays if the above is ture.
      }else{
        alert("Sorry, only numbers are accepted.");//Will be displayed if the user enters something other than a number.
      }
