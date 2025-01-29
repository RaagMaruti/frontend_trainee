interface Student {
  id: number;
  name: string;
  surname?: string;
}

let student_obj: Partial<Student> = { id: 1 };

let student_obj2: Required<Student> = { id: 2, name: "q", surname: "w" };

let student_obj3: Omit<Student, "id"> = {
  name: "q",
};

let student_obj4: Pick<Student, "id"> = {
  id: 1,
};

let student_obj5: Readonly<Student> = {
  id: 1,
  name: "q",
};

const StudentMap: Record<string, number> = {
  q: 1,
  w: 2,
};

let student_obj6: Record<Exclude<keyof Student, "surname">, any> = {
  id: 3,
  name: "John",
};

function getStudentName(student: Student): string {
  return student.name;
}

let studentName: ReturnType<typeof getStudentName> = "John";

let studentParams: Parameters<typeof getStudentName> = [
  { id: 1, name: "John" },
];
