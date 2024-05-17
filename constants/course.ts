const course = ['rhino', 'sketchup', 'autocad', 'photoshop', 'illustrator', ''] as const;

type IndividualCourse = (typeof course)[number];

export type { IndividualCourse };
export default course;
