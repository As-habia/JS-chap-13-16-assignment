//question 7//
let studentNamesLiteral = [];

        let studentNamesObject = new Array();

        let stringsArray = ["Hello", "World", "JavaScript", "Arrays"];

        let numbersArray = [1, 2, 3, 4, 5];

        let booleanArray = [true, false, true, false];

        let mixedArray = ["Text", 123, true, null];

        let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

        document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
        document.write("<ul>");
        for (let i = 0; i < qualifications.length; i++) {
            document.write("<li>" + qualifications[i] + "</li>");
        }
        document.write("</ul>");

        //question 8//
        let studentNames = ["Alice", "Bob", "Charlie"];
        
        let studentScores = [420, 350, 480];
        
        const totalMarks = 500;
        
        document.write("<h2>Student Scores and Percentages</h2>");
        
        for (let i = 0; i < studentNames.length; i++) {
            let percentage = (studentScores[i] / totalMarks) * 100;
            document.write("<p>Student: " + studentNames[i] + "<br>");
            document.write("Score: " + studentScores[i] + "<br>");
            document.write("Percentage: " + percentage.toFixed(2) + "%</p>");
        }

        //question 10//
        let studentsScores = [85, 92, 78, 90, 88, 76, 95, 89, 81, 70];

        document.write("<h2>Initial Student Scores:</h2>");
        document.write("<p>" + studentsScores.join(", ") + "</p>");

        studentsScores.sort(function(a, b) {
            return a - b;
        });

        document.write("<h2>Sorted Student Scores in Ascending Order:</h2>");
        document.write("<p>" + studentsScores.join(", ") + "</p>");
   

        //question 11//
        let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

        document.write("<h2>Initial Cities Array:</h2>");
        document.write("<p>" + cities.join(", ") + "</p>");

        let selectedCities = cities.slice(1, 4); 

        document.write("<h2>Selected Cities Array:</h2>");
        document.write("<p>" + selectedCities.join(", ") + "</p>");



        //question 12//
        var arr = ["This", " is", " my", " cat"];

        document.write("<h2>Initial Array:</h2>");
        document.write("<p>" + arr.join(", ") + "</p>");

        var singleString = arr.join("");

        document.write("<h2>Single String from Array:</h2>");
        document.write("<p>" + singleString + "</p>");


        //question 15//
        var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

        document.write("<h2>Select a Phone Manufacturer:</h2>");
        document.write("<select>");

        for (var i = 0; i < phoneManufacturers.length; i++) {
            document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
        }

        document.write("</select>");