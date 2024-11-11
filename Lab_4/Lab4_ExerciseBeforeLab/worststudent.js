// This JSON file has 2 functions - FindWorstStudent and Run4 (Notes by James)

// This function takes an array of objects and returns the one with the lowest GPA
function FindWorstStudent(listOfStudents)
{
    // this variable keeps track of the current worst student. 
    var worstStudent;

    // loop through each of the students in the array
    // the input of the function (Notes by James)
    listOfStudents.forEach(
    
        // The variable element gets set to be each item in the array,
        // in a loop through all items in the array.
        // For each record in the array, do this stuff.

        // first iteration - value of the first item within the input array - for this exercise, it will be "dan" located in script.js (Notes by James)
        element => 
        {
            // When we are on the first item in the array, worstStudent will be null
            // since it has not been set yet. Set it to be the first item in the list. 
            // When we haven't seen any other students, the first one is the current worst one.

            // if first value is true (==), set value to element, which will be "dan" (Notes by James)
            if (worstStudent == null)
            {
                worstStudent = element;
            }

            // when worstStudent is not null, it means that we are on a record after the first one, so compare.
            // if the GPA of the current one is lower than the GPA of the current worst one, 
            // set the worst one to be this one

            // if gpa is lower than the "dan", assign value of element to new student (Notes by James)
            else
            {
                if (element.gpa < worstStudent.gpa)
                {
                    worstStudent = element;
                }
            }
        }
    );

    return worstStudent;
}

// call function from another function (Notes by James)
// console.log() means print (Notes by James)

function Run4()
{
    // theJSON is a variable already created since it is loaded via a script tag in the HTML page.
    // print input variable (Notes by James)
    console.log(theJSON);

    // get the array of people from the JSON object's data property which contains the array
    // new variable - students. theJSON.data is the value of students. This will pull data from our other JSON file (Notes by James)
    var students = theJSON.data;

    // get the worst student
    // new variable - worstStudent (Notes by James)
    var worstStudent = FindWorstStudent(students);

    // print it out
    console.log("The worst student has been found. It is: ");
    console.log(worstStudent);
}