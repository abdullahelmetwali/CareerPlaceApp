import { Text } from "react-native";
import * as db from '@/db/db.json';

const Favourites = () => {
    const courses = db.courses.filter(course => course.favourite);
    const lectures = db.lectures.filter(lecture => lecture.favourite);
    const jobs = db.jobs.filter(job => job.favourite);
    return (
        <Text style={{ margin: 50 }}>
            Favourtites
        </Text>
    )
}
export default Favourites;