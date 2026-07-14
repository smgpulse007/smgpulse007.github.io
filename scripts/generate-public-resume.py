"""Generate the one-page, privacy-cleared public resume artifact."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf"
INK = colors.HexColor("#122019")
ACCENT = colors.HexColor("#167254")
MUTED = colors.HexColor("#52615A")
RULE = colors.HexColor("#CCD6CF")


class ResumeCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        kwargs["invariant"] = 1
        kwargs["pageCompression"] = 1
        super().__init__(*args, **kwargs)
        self.setTitle("Shailesh Dudala - Senior Applied AI Engineer Resume")
        self.setAuthor("Shailesh Dudala")
        self.setSubject("Privacy-cleared public professional resume")
        self.setKeywords("Applied AI, agentic AI, document intelligence, healthcare, insurance, MLOps")

    def showPage(self):
        self.saveState()
        self.setStrokeColor(RULE)
        self.line(0.48 * inch, 0.38 * inch, 8.02 * inch, 0.38 * inch)
        self.setFillColor(MUTED)
        self.setFont("Helvetica", 6.8)
        self.drawString(0.48 * inch, 0.22 * inch, "Public resume - portfolio edition")
        self.drawRightString(8.02 * inch, 0.22 * inch, "shaileshdudala.com")
        self.restoreState()
        super().showPage()


def bullet(text: str, styles: dict) -> Paragraph:
    return Paragraph(f"- {text}", styles["Bullet"])


def role(title: str, organization: str, period: str, bullets: list[str], styles: dict):
    return KeepTogether([
        Paragraph(f"<b>{title}</b> | {organization}", styles["Role"]),
        Paragraph(period, styles["Period"]),
        *[bullet(item, styles) for item in bullets],
        Spacer(1, 4.5),
    ])


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sample = getSampleStyleSheet()
    styles = {
        "Name": ParagraphStyle("Name", parent=sample["Title"], fontName="Helvetica-Bold", fontSize=19.5, leading=21, textColor=INK, alignment=TA_CENTER, spaceAfter=1),
        "Headline": ParagraphStyle("Headline", parent=sample["Normal"], fontName="Helvetica-Bold", fontSize=9.7, leading=11.5, textColor=ACCENT, alignment=TA_CENTER, spaceAfter=2.5),
        "Contact": ParagraphStyle("Contact", parent=sample["Normal"], fontName="Helvetica", fontSize=7.7, leading=9.2, textColor=MUTED, alignment=TA_CENTER, spaceAfter=6),
        "Section": ParagraphStyle("Section", parent=sample["Heading2"], fontName="Helvetica-Bold", fontSize=9.6, leading=11, textColor=ACCENT, spaceBefore=3.5, spaceAfter=2.8, keepWithNext=True),
        "Role": ParagraphStyle("Role", parent=sample["Normal"], fontName="Helvetica-Bold", fontSize=8.6, leading=10.2, textColor=INK, keepWithNext=True),
        "Period": ParagraphStyle("Period", parent=sample["Normal"], fontName="Helvetica-Oblique", fontSize=7.45, leading=8.8, textColor=MUTED, spaceAfter=1.4, keepWithNext=True),
        "Body": ParagraphStyle("Body", parent=sample["BodyText"], fontName="Helvetica", fontSize=8.05, leading=10.1, textColor=INK, spaceAfter=2.4),
        "Bullet": ParagraphStyle("Bullet", parent=sample["BodyText"], fontName="Helvetica", fontSize=7.95, leading=9.75, textColor=INK, leftIndent=10, firstLineIndent=-6, spaceAfter=0.9),
        "Compact": ParagraphStyle("Compact", parent=sample["BodyText"], fontName="Helvetica", fontSize=7.6, leading=9.3, textColor=INK, spaceAfter=1.7),
        "MiniHead": ParagraphStyle("MiniHead", parent=sample["Heading3"], fontName="Helvetica-Bold", fontSize=8.1, leading=9.3, textColor=ACCENT, spaceAfter=2.5),
        "Note": ParagraphStyle("Note", parent=sample["BodyText"], fontName="Helvetica", fontSize=6.65, leading=8, textColor=MUTED),
    }

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.48 * inch,
        leftMargin=0.48 * inch,
        topMargin=0.34 * inch,
        bottomMargin=0.48 * inch,
        title="Shailesh Dudala - Senior Applied AI Engineer Resume",
        author="Shailesh Dudala",
        subject="Privacy-cleared public professional resume",
        keywords="Applied AI, agentic AI, document intelligence, healthcare, insurance, MLOps",
    )

    story = [
        Paragraph("Shailesh Dudala", styles["Name"]),
        Paragraph("SENIOR APPLIED AI ENGINEER | HEALTHCARE & INSURANCE", styles["Headline"]),
        Paragraph(
            '<link href="mailto:shaileshdudala@icloud.com">shaileshdudala@icloud.com</link> | '
            '<link href="https://shaileshdudala.com">shaileshdudala.com</link> | '
            '<link href="https://www.linkedin.com/in/ssdudala/">LinkedIn</link> | '
            '<link href="https://github.com/smgpulse007">GitHub</link>',
            styles["Contact"],
        ),
        Paragraph("PROFILE", styles["Section"]),
        Paragraph(
            "Applied AI engineer with more than seven years across healthcare, insurance, document intelligence, predictive ML, and MLOps. Designs the contracts, evaluation, human review, and observability that turn uncertain model output into accountable workflows.",
            styles["Body"],
        ),
        Paragraph("CORE", styles["Section"]),
        Paragraph(
            "Agentic workflows | Document intelligence, OCR, and RAG | Healthcare interoperability (FHIR/HL7) | Predictive ML | Human-in-the-loop systems | Evaluation and observability | Local/private AI | ML platforms and MLOps",
            styles["Compact"],
        ),
        Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"]),
        role(
            "Applied AI Engineer Consultant",
            "MetLife via Bizintex",
            "2026 - Present",
            [
                "Designs claims and document workflows with typed extraction, validation gates, reviewer fallbacks, and trace telemetry.",
                "Supported approximately 90% lower handling effort and approximately 50% shorter time-to-claim-payable in a measured claims workstream.",
            ],
            styles,
        ),
        role(
            "Lead DS/ML Engineer Consultant",
            "Inland Empire Health Plan via Infowave",
            "2023 - 2025",
            [
                "Led local document intelligence, quality-measure evidence, predictive analytics, fraud/waste review, and MLOps.",
                "Cleared a 7,000-case backlog with approximately 90% lower review time inside the local data boundary.",
                "Improved automated quality-measure closures by 20% and reduced transportation waste by 18% in their respective workflows.",
            ],
            styles,
        ),
        role(
            "Lead Data Scientist / Product",
            "Hexplora",
            "2020 - 2023",
            [
                "Helped build and scale a 0-to-1 analytics product across nine healthcare programs, spanning risk models, reusable delivery, dashboards, and care workflows.",
                "Supported $500K in new revenue, approximately $3M in broader client P4P impact, and approximately 50% faster model deployment cycles.",
            ],
            styles,
        ),
        role(
            "Data Science and Biomedical Informatics Roles",
            "CommonSpirit Health; Health New England; University of Chicago; AbbVie",
            "Earlier foundations",
            [
                "Worked across hospital analytics, provider data, biomedical research, clinical sensors, genomics, and public-health modeling.",
                "Delivered analytics spanning 142 hospitals and validation covering 100,000+ provider records; reduced manual provider review by 60% in a measured workflow.",
            ],
            styles,
        ),
    ]

    selected_systems = [
        Paragraph("SELECTED SYSTEMS", styles["MiniHead"]),
        bullet("Claims intelligence - typed extraction, deterministic validation, exception routing, human review, and audit telemetry.", styles),
        bullet("On-prem document intelligence - local parsing, retrieval, page citations, and explicit fallback states.", styles),
        bullet("Healthcare analytics platform - risk models, reusable delivery, reporting, and care workflows across nine programs.", styles),
        bullet("LLM Steering - public local-first activation-steering workbench with tests, experiment manifests, and documented limits.", styles),
    ]
    education = [
        Paragraph("EDUCATION + CREDENTIALS", styles["MiniHead"]),
        Paragraph("M.S., Biomedical Informatics - University of Chicago, 2019", styles["Compact"]),
        Paragraph("B.Tech., Computer Science and Engineering - SRM University, 2018", styles["Compact"]),
        Paragraph("Yale Summer School, Public Health Modeling, 2019", styles["Compact"]),
        Paragraph("AWS ML Engineer - Associate | Azure AI Fundamentals | Power BI Data Analyst", styles["Compact"]),
        Spacer(1, 3),
        Paragraph("RECOGNITION", styles["MiniHead"]),
        Paragraph("Team recipient - Global HL7 AI Challenge, Transformative Impact in Healthcare Award (2025), Let’s Talk Doc", styles["Compact"]),
    ]
    table = Table([[selected_systems, education]], colWidths=[3.95 * inch, 3.45 * inch], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (0, 0), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 16),
        ("LEFTPADDING", (1, 0), (1, 0), 16),
        ("RIGHTPADDING", (1, 0), (1, 0), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("LINEABOVE", (0, 0), (-1, 0), 0.6, RULE),
        ("LINEBEFORE", (1, 0), (1, 0), 0.6, RULE),
    ]))
    story.extend([
        table,
        Spacer(1, 3),
        Paragraph(
            "PUBLICATION BOUNDARY: Professional systems are described without PHI, PII, employer-confidential artifacts, proprietary workflow rules, credentials, or private production details.",
            styles["Note"],
        ),
    ])

    doc.build(story, canvasmaker=ResumeCanvas)
    print(OUTPUT)


if __name__ == "__main__":
    build()
