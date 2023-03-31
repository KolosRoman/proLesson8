//  Додавання середньої оцінки

let averageGradeStudents = (array) => {
    
    let averageGradeArray = array.map((el) => {
        let average = 0;
    
        el.marks.forEach((subel) => {
            average += subel;
        })
        average = average/el.marks.length;
        el['average grade'] = average;
    
        return el;
    })

    return averageGradeArray;
}

let averageGradeTest = averageGradeStudents(test);
console.log(averageGradeTest);

// // Перелік студентів на відрахування

const listExpellStudents = (array) => {
    const listExpellStudentsArray = array.filter((el) => {
        return el['average grade'] < 55;
    })
    return listExpellStudentsArray;
}
    
console.log(listExpellStudents(averageGradeTest));

// Медіанна оцінка студентів

let medianSuccessful = (array) => {
    let medianSuccessfulArray = array.map((el) => {
        let medianNumber = 0;
        let medianArray = el.marks.sort((a, b) => {
                return a - b;
            })
        let num1 = medianArray.length / 2 - 1;
        let num2 = Math.floor(medianArray.length / 2);
        
        if (medianArray.length % 2 === 0) {
            medianNumber = (medianArray[num1] + medianArray[num2]) / 2;
        } else {
            medianNumber = medianArray[num2];
        };
        el['median'] = medianNumber;
    
        return el;
    })

    return medianSuccessfulArray;
}
    
console.log(medianSuccessful(test));

// // Новий студент

let newStudent = (name, specialty, marks) => {
    test.push({
        name,
        specialty,
        marks,
    })
}

newStudent('Ivan', 'JS', [50, 80, 15, 100]);
newStudent('Petro', 'JS', [30, 55, 20, 95]);
console.log(test);

// Відсортовані студенти по середньому балу

let averageGradeSort = (array) => {
    let sortArray = array.slice().sort((a, b) => {
        return b['average grade'] - a['average grade'];
    })
    sortArray.forEach((el) => {
        console.log(`name: ${el['name']}, average grade: ${el['average grade']}`);
    })
}
averageGradeSort(averageGradeTest);

// // Самі успішні учні

let successfulStudents = (array) => {
    let sortArray = array.slice().sort((a, b) => {
        return b['average grade'] - a['average grade'];
    })
    let topFiveStudents = sortArray.slice(0, 5)
    console.log(topFiveStudents);
}

successfulStudents(averageGradeTest)
