import React, { useState } from 'react';
import {DAY_HOURS, getSubjectsByGroups, LESSONS, practice, rooms} from '../Data/data';
import * as XLSX from 'xlsx';
import {generateTimetable, getCyclesNumbers, jsonToObjects} from "../Services/service";

const Timetable = () => {
    const [timetable, setTimetable] = useState([]);
    const [file, setFile] = useState(null);
    const [json, setJson] = useState(null);
    const [cyclesSyllabus, setCyclesSyllabus] = useState(null);

    const handleFileUpload = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setFile(file);
    }

    const handleReadExcelObject = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const sheetNames = workbook.SheetNames;
            const result = [];
            sheetNames.forEach((sheetName) => {
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                result.push({name: sheetName, data: jsonData});
            })
            setJson(result);
            setCyclesSyllabus(jsonToObjects(result));
        };
        reader.readAsArrayBuffer(file);
    }

    const printData = (e) => {
        e.preventDefault();
        console.log(cyclesSyllabus);
    }

    const exportToExcel = () => {
        const ws = XLSX.utils.aoa_to_sheet(
            [
                ["Time", ...timetable.map(group => group.name)],
                [LESSONS[0], ...timetable.map(group => `${group.lessons[0].subject + ' ' + group.lessons[0].tutor}`)],
                [LESSONS[1], ...timetable.map(group => `${group.lessons[1].subject + ' ' + group.lessons[1].tutor}`)],
                [LESSONS[2], ...timetable.map(group => `${group.lessons[2].subject + ' ' + group.lessons[2].tutor}`)],
                [LESSONS[3], ...timetable.map(group => `${group.lessons[3].subject + ' ' + group.lessons[3].tutor}`)],
                [LESSONS[4], ...timetable.map(group => `${group.lessons[4].subject + ' ' + group.lessons[4].tutor}`)]
            ]
        );
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Timetable");
        XLSX.writeFile(wb, "timetable.xlsx");
    };

    const handleGenerateTimetable = () => {
        setTimetable(generateTimetable());
    }


    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <button onClick={handleReadExcelObject}>Read Excel</button>
            <button onClick={printData}>Print Data</button>
            <hr/>
            <button onClick={handleGenerateTimetable}>Generate</button>
            <button onClick={exportToExcel}>Export to Excel</button><br/>
            <table>
                <thead>
                <tr>
                    <th>Time</th>
                    {timetable.map(group => (
                        <th key={group.name}>{group.name}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {LESSONS.map((time, index) => (
                    <tr key={time}>
                        <td>{time}</td>
                        {timetable.map(group => (
                            <td key={group.name}>
                                {group.lessons[index].subject}<br />
                                {group.lessons[index].tutor}<br />
                                {group.lessons[index].cabinet}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;