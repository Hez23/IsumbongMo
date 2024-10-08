import { db } from "./Firebase";
import {
  collection,
  addDoc,
  Timestamp,
  serverTimestamp,
  getDocs,
  query,
} from "firebase/firestore";
import _ from "lodash";
import dayjs from "dayjs";

class ReportService {
  createReport(reportData) {
    const ts = serverTimestamp();
    const reportedMonth = dayjs().format("YYYY-MM");
    const data = { ...reportData, createdAt: ts, reportedMonth };
    console.log("createReport", data);
    return addDoc(collection(db, "reports"), data);
  }
  async getReportsCountByType() {
    // const q = query()
    const reportsSnapshot = await getDocs(collection(db, "reports"));
    let reports = [];
    reportsSnapshot.forEach((r) => {
      reports.push(r.data());
    });
    const reportsByMonth = _.groupBy(reports, (i) => {
      return i["reportedMonth"];
    });
    const reportsCountPerMount = _.mapValues(reportsByMonth, (r) => {
      return _.countBy(reports, "reportType");
    });
    console.log("reportsCountPerMount", reportsCountPerMount);
    return reportsCountPerMount;
  }
}

export default ReportService;
