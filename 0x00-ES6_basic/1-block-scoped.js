export default function taskBlock(trueOrFalse) {
  const task = false;
  let task2 = true;

  if (trueOrFalse) {
    task2 = false;
  }

  return [task, task2];
}
