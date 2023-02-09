import {DAY_HOURS, getSubjectsByGroups, practice, rooms} from "../Data/data";

export const jsonToObjects = (json) => {
    const cycle = [];
    for (let i = 0; i < json.length; i++){
        const jsonData = json[i].data;
        const syllabuses = [];
        let num = null;
        let name = null;
        for(let j = 1; j < jsonData.length;){
            name = jsonData[j][0];
            if (name !== undefined) {
                const topics = [];
                num = jsonData[j][1];
                for(let k = 0; k < num; k++){
                    topics.push({
                        id: jsonData[j + k][2],
                        name: jsonData[j + k][3],
                        times: jsonData[j + k][4]
                    })
                }
                if (topics.length === num) {
                    syllabuses.push({name: name, total: num, topics: topics});
                }
                j = j + num;
            }
        }
        cycle.push({name: json[i].name, syllabuses: syllabuses})
    }
    return cycle;
}

export const getCyclesNumbers = () => {
    let prevGroupName = 'Unknown';
    const cycles = [];
    let num = 0;
    getSubjectsByGroups.forEach(group => {
        if(prevGroupName.slice(0, prevGroupName.length - 3) === group.name.slice(0, group.name.length - 3)){
            cycles.forEach((g) => {
                if(group.name.slice(0, group.name.length - 3) === g.name) {
                    g.numbers += group.count;
                }
            })
        } else {
            num = 0;
            num += group.count;
            cycles.push({
                name: group.name.slice(0,group.name.length-3),
                numbers: num
            })
        }
        prevGroupName = group.name;
    })
    return cycles;
}

export const generateTimetable = () => {
    const busyRooms = [];
    const practiceLessons = practice;
    const newTimetable = [];
    let prevGroup = [];
    let prevGroupName = 'Unknown';
    let prevGroupNumber = 0;
    // eslint-disable-next-line no-unused-vars
    getSubjectsByGroups.forEach(group => {
        const groupSubjects = group.subjects;
        const groupTutors = group.learns;
        const groupLessons = [];
        if (prevGroupName.slice(0, prevGroupName.length - 3) === group.name.slice(0, group.name.length - 3)) {
            DAY_HOURS.forEach((time, index) => {
                const lesson = prevGroup[index];
                const subjectTutors = (groupTutors.find(tutor => tutor.subject === lesson.subject)).tutors;
                const tutor = subjectTutors[Math.floor(Math.random() * subjectTutors.length)];
                let number = 0;
                let cabinet = "";
                let lessonRoom = rooms.filter(room => (room.cabinet === cabinet));
                if (prevGroup[index].tutor === tutor) {
                    number = group.count + prevGroupNumber;
                    if (lessonRoom.seats >= number) {
                        cabinet = lessonRoom.cabinet;
                    } else {
                        let acceptedRooms = rooms.filter(room => (room.seats >= number));
                        // eslint-disable-next-line array-callback-return
                        acceptedRooms.map(room => {
                            if(busyRooms.includes(room.cabinet) === false) {
                                lessonRoom = room;
                            }
                        });
                    }
                    cabinet = lessonRoom.cabinet;
                    newTimetable.forEach((group) => {
                        if (group.name === prevGroupName) {
                            group.lessons.forEach((lesson) => {
                                lesson.cabinet = cabinet;
                            })
                        }
                    })
                } else {
                    cabinet = group.cabinet;
                    number = group.count;
                }
                groupLessons.push({time: time, subject: lesson.subject, tutor: tutor, cabinet: cabinet});
            });
        } else {
            if(prevGroup.length === 0){
                DAY_HOURS.forEach((time) => {
                    const subject = groupSubjects[Math.floor(Math.random() * groupSubjects.length)];
                    const subjectTutors = groupTutors.find(tutor => tutor.subject === subject).tutors;
                    const tutor = subjectTutors[Math.floor(Math.random() * subjectTutors.length)];
                    const cabinet = group.cabinet;
                    busyRooms.push(cabinet)
                    groupLessons.push({time: time, subject: subject, tutor: tutor, cabinet: cabinet});
                });
            } else {
                DAY_HOURS.forEach((time,index) => {
                    let subject = groupSubjects[Math.floor(Math.random() * groupSubjects.length)];
                    let subjectTutors = groupTutors.find(tutor => tutor.subject === subject).tutors;
                    let tutor = subjectTutors[Math.floor(Math.random() * subjectTutors.length)];
                    while (prevGroup[index].tutor === tutor) {
                        subject = groupSubjects[Math.floor(Math.random() * groupSubjects.length)];
                        subjectTutors = groupTutors.find(tutor => tutor.subject === subject).tutors;
                        tutor = subjectTutors[Math.floor(Math.random() * subjectTutors.length)];
                    }
                    const cabinet = group.cabinet;
                    busyRooms.push(cabinet);
                    groupLessons.push({time: time, subject: subject, tutor: tutor, cabinet: cabinet});
                });
            }
        }
        newTimetable.push({
            name: group.name,
            lessons: groupLessons
        });
        prevGroup = groupLessons;
        prevGroupName = group.name;
        prevGroupNumber = group.count;
        groupLessons.push({time: '7 - 8', subject: 'СРСП', tutor: group.supervisor, cabinet: group.cabinet});
        groupLessons.push({time: 'Трен.', subject: practiceLessons[Math.floor(Math.random() * (practiceLessons.length - 1))], tutor: group.supervisor, cabinet: ''});
    });
    return newTimetable;
};