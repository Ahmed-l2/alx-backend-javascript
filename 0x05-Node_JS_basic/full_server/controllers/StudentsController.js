import readDatabase from '../utils';

const path = process.argv[2];
class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(path).then((studentData) => {
      const data = ['This is the list of our students'];
      data.push(`Number of students in CS: ${studentData.CS.length}. List: ${studentData.CS.join(', ')}`);
      data.push(`Number of students in SWE: ${studentData.SWE.length}. List: ${studentData.SWE.join(', ')}`);
      res.status(200).send(data.join('\n'));
    }).catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major === 'CS' || major === 'SWE') {
      readDatabase(path).then((data) => {
        res.status(200).send(`List: ${data[major].join(', ')}`);
      }).catch(() => res.status(500).send('Cannot load the database'));
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
