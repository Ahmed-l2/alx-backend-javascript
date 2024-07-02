export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    view.setInt8(position, value);
  } catch {
    throw new Error('Position outside range');
  }

  return view;
}
