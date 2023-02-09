export const DAY_HOURS = ['1 - 2', '3 - 4', '5 - 6'];

export const LESSONS = ['1 - 2', '3 - 4', '5 - 6', '7 - 8', 'Трен.'];

export const getSyllabusesByGroups = [
    {
        name: 'КБ',
        syllabuses: [
            {
                name: 'ВТ',
                сourse: 1,
                topics: [
                    {
                        title: 'Тема 1. Введение',
                        hours: 4
                    },
                    {
                        title: '',
                        hours: 4
                    },
                    {
                        title: '',
                        hours: 4
                    },
                    {
                        title: '',
                        hours: 4
                    },
                    {
                        title: '',
                        hours: 4
                    },
                    {
                        title: '',
                        hours: 4
                    },
                ]
            }
        ]
    },
]

export const getSubjectsByGroups = [
    {
        name:'КБ-21',
        count:20,
        supervisor: 'Беккулов Б.М.',
        subjects: ['КБ', 'МВР'],
        cabinet: 'C1.3.370',
        learns: [
            {
                subject: 'КБ',
                tutors: ['Беккулов Б.М.'],
            },
            {
                subject: 'МВР',
                tutors: ['Аблаев Ш.Ж.'],
            }
        ]
    },
    {
        name:'КБ-22',
        count: 25,
        supervisor: 'Омурзаков Т.И.',
        subjects: ['КБ', 'МВР'],
        cabinet: 'C1.3.370',
        learns: [
            {
                subject: 'КБ',
                tutors: ['Беккулов Б.М.'],
            },
            {
                subject: 'МВР',
                tutors: ['Аблаев Ш.Ж.'],
            }
        ]
    },
    {
        name:'КБ-23',
        count: 25,
        supervisor: 'Омурзаков Т.И.',
        subjects: ['КБ', 'МВР'],
        cabinet: 'C1.3.370',
        learns: [
            {
                subject: 'КБ',
                tutors: ['Беккулов Б.М.'],
            },
            {
                subject: 'МВР',
                tutors: ['Аблаев Ш.Ж.'],
            }
        ]
    },
    {
        name:'ГИС-24',
        count: 20,
        supervisor: 'Герасимов С.В.',
        subjects: ['ГИС', 'МВР'],
        cabinet: 'C1.3.343',
        learns: [
            {
                subject:'ГИС',
                tutors:['Герасимов С.В.'],
                cabinet: 'C1.3.343'
            },
            {
                subject:'МВР',
                tutors:['Аблаев Ш.Ж.'],
            }
        ]
    },
    {
        name:'ГИС-25',
        count: 22,
        supervisor: 'Акишбаев С.С.',
        subjects: ['ГИС', 'МВР'],
        cabinet: 'C1.3.345',
        learns: [
            {
                subject:'ГИС',
                tutors:['Акишбаев С.С.'],
            },
            {
                subject:'МВР',
                tutors:['Аблаев Ш.Ж.'],
            }
        ]
    },
    {
        name:'ТГО-26',
        count: 16,
        supervisor: 'Каиржанов А.С.',
        subjects: ['ТГО'],
        cabinet: 'C1.3.344',
        learns: [
            {
                subject:'ТГО',
                tutors:['Каиржанов А.С.'],
            }
        ]
    },
    {
        name:'ОВИР-27',
        count: 7,
        supervisor: 'Сырымов Б.К.',
        subjects: ['ОВиИР', 'ТП', 'ОВПиП'],
        cabinet: 'C1.3.351',
        learns: [
            {
                subject:'ОВиИР',
                tutors:['Сырымов Б.К.'],
            },
            {
                subject:'ОВПиП',
                tutors:['Сырымов Б.К.'],
            },
            {
                subject:'ТП',
                tutors:['Досумов Д.К.'],
            }
        ]
    },
    {
        name:'ОПР-28',
        count: 12,
        supervisor: 'Мухамеджанова Ш.С.',
        subjects: ['ОПР', 'ТП'],
        cabinet: 'C1.3.341',
        learns: [
            {
                subject:'ОПР',
                tutors:['Мухамеджанова Ш.С.'],
                cabinet: 'C1.3.341'
            },
            {
                subject:'ТП',
                tutors:['Омурзаков Т.И.'],
                cabinet: 'C1.3.341'
            }
        ]
    }
];

export const rooms = [
    {
        cabinet:'C1.3.339',
        seats: 18,
    },
    {
        cabinet:'C1.3.340',
        seats: 18,
    },
    {
        cabinet:'C1.3.341',
        seats: 22,
    },
    {
        cabinet:'C1.3.342',
        seats: 30,
    },
    {
        cabinet:'C1.3.343',
        seats: 45,
    },
    {
        cabinet:'C1.3.344',
        seats: 50,
    },
    {
        cabinet:'C1.3.345',
        seats: 50,
    },
    {
        cabinet:'C1.3.351',
        seats: 50,
    },
    {
        cabinet:'C1.3.370',
        seats: 80,
    }
]

export const practice = [
    'Разбор АК-47',
    'Строевой плац',
    'Физическая Подготовка',
];