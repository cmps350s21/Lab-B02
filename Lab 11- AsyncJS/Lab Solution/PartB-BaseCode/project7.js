import fs from 'fs-extra'

/* 1.	In project7.js :  Rewrite the code you created in project5.js using Async/await.
*/

async function getCourses(){
    //synchronous
    try{
        //it is an asynchronous
        const courses = await fs.readJson('data/course.json')
        const staffs = await fs.readJson('data/staff.json')
        const students = await fs.readJson('data/student.json')
        for (const course of courses) {
            const {firstname, lastname} = staffs.find(s => s.staffNo == course.instructorId)
            course.instructorName = `${firstname} ${lastname}`
            const registeredStudents = students.filter(s => s.courseIds.includes(course.crn))
            course.studentCount = registeredStudents.length
        }
        return courses
    }catch (e) {
        return e
    }
}
getCourses()
    .then(courses => console.log(courses))

console.log("the rest of your code")
