export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === 'San Francisco');
}
