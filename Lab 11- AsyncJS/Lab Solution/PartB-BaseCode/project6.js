/*
1.In project6.js :  Rewrite the code you created in project4.js using Async/await.
 */
import fs from 'fs-extra'
/*
1.Rewrite the you created in Part-2 using promises.
*/

async function getCourses(){
    try{
        const courses = await fs.readJson('data/course.json')
        const staffs = await fs.readJson('data/staffs.json')
        for (const course of courses) {
            const {firstname, lastname} = staffs.find(s => s.staffNo == course.instructorId)
            course.instructorName = `${firstname} ${lastname}`
        }
        return courses
    }catch (e) {
        return e
    }

}


getCourses().then(courses => console.log(courses))