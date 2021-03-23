import { OutputTarget } from "../Summary";
import fs from 'fs';

export class HtmlReport implements OutputTarget {

  print(report: string): void {

    // !writng report to html file
    const html = `
    <div>
    <h1>Analysis Output</h1>
    <p>${report}</p>
    </div>
    `
    fs.writeFileSync('report.html', html)
  }
}