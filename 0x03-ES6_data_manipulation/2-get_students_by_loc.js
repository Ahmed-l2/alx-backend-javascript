export default function getStudentsByLocation(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === 'San Francisco');
}
