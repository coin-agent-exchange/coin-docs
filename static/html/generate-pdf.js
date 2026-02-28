const puppeteer = require('puppeteer');
const path = require('path');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generatePDF(inputFile, outputFile) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, '..', 'src', inputFile);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0', timeout: 60000 });

    // Wait for Mermaid diagrams to render
    await sleep(5000);

    await page.pdf({
      path: path.resolve(__dirname, '..', 'output', outputFile),
      format: 'A4',
      printBackground: true,
      margin: { top: '0.5in', right: '0.6in', bottom: '0.5in', left: '0.6in' },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: '<div style="font-size:10px;color:#6B7280;width:100%;text-align:center;font-family:Inter,sans-serif;">Coin — Confidential &nbsp;&nbsp;|&nbsp;&nbsp; <span class="pageNumber"></span> / <span class="totalPages"></span></div>'
    });

    console.log(`Generated: ${outputFile}`);
  } finally {
    await browser.close();
  }
}

(async () => {
  try {
    await generatePDF('prd-v2.html', 'coin-prd-v2.pdf');
    await generatePDF('roadmap.html', 'coin-roadmap.pdf');
    await generatePDF('adr-001.html', 'coin-adr-001.pdf');
    console.log('All PDFs generated.');
  } catch (err) {
    console.error('Error generating PDFs:', err);
    process.exit(1);
  }
})();
