"""Generate the privacy-cleared, ATS-readable public resume artifact.

The source career record contains private and over-broad details that are not
eligible for publication. This generator intentionally uses only the governed
portfolio copy and keeps the public artifact reproducible.
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf"
INK = colors.HexColor("#17211d")
ACCENT = colors.HexColor("#126a4a")
MUTED = colors.HexColor("#52615a")


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
        self._draw_footer()
        super().showPage()

    def _draw_footer(self):
        self.saveState()
        self.setStrokeColor(colors.HexColor("#d8dfda"))
        self.line(0.58 * inch, 0.43 * inch, 7.92 * inch, 0.43 * inch)
        self.setFillColor(MUTED)
        self.setFont("Helvetica", 7.5)
        self.drawString(0.58 * inch, 0.25 * inch, "Public resume - governed portfolio edition")
        self.drawRightString(7.92 * inch, 0.25 * inch, f"Page {self.getPageNumber()}")
        self.restoreState()


def bullet(text: str, styles: dict) -> Paragraph:
    return Paragraph(f"- {text}", styles["Bullet"])


def role(title: str, organization: str, period: str, summary: str, bullets: list[str], styles: dict):
    return KeepTogether([
        Paragraph(f"<b>{title}</b> | {organization}", styles["Role"]),
        Paragraph(period, styles["Period"]),
        Paragraph(summary, styles["Body"]),
        *[bullet(item, styles) for item in bullets],
        Spacer(1, 7),
    ])


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sample = getSampleStyleSheet()
    styles = {
        "Name": ParagraphStyle("Name", parent=sample["Title"], fontName="Helvetica-Bold", fontSize=20, leading=22, textColor=INK, alignment=TA_CENTER, spaceAfter=2),
        "Headline": ParagraphStyle("Headline", parent=sample["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=ACCENT, alignment=TA_CENTER, spaceAfter=4),
        "Contact": ParagraphStyle("Contact", parent=sample["Normal"], fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED, alignment=TA_CENTER, spaceAfter=9),
        "Section": ParagraphStyle("Section", parent=sample["Heading2"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=ACCENT, spaceBefore=5, spaceAfter=4, borderWidth=0, keepWithNext=True),
        "Role": ParagraphStyle("Role", parent=sample["Normal"], fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=INK, keepWithNext=True),
        "Period": ParagraphStyle("Period", parent=sample["Normal"], fontName="Helvetica-Oblique", fontSize=8, leading=10, textColor=MUTED, spaceAfter=2, keepWithNext=True),
        "Body": ParagraphStyle("Body", parent=sample["BodyText"], fontName="Helvetica", fontSize=8.5, leading=11.2, textColor=INK, spaceAfter=3),
        "Bullet": ParagraphStyle("Bullet", parent=sample["BodyText"], fontName="Helvetica", fontSize=8.3, leading=10.7, textColor=INK, leftIndent=11, firstLineIndent=-7, bulletIndent=2, spaceAfter=1.7),
        "Compact": ParagraphStyle("Compact", parent=sample["BodyText"], fontName="Helvetica", fontSize=8.2, leading=10.5, textColor=INK, spaceAfter=2),
    }

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        rightMargin=0.58 * inch,
        leftMargin=0.58 * inch,
        topMargin=0.42 * inch,
        bottomMargin=0.55 * inch,
        title="Shailesh Dudala - Senior Applied AI Engineer Resume",
        author="Shailesh Dudala",
    )

    story = [
        Paragraph("Shailesh Dudala", styles["Name"]),
        Paragraph("SENIOR APPLIED AI ENGINEER", styles["Headline"]),
        Paragraph(
            '<link href="mailto:shaileshdudala@icloud.com">shaileshdudala@icloud.com</link> | '
            '<link href="https://shaileshdudala.com">shaileshdudala.com</link> | '
            '<link href="https://www.linkedin.com/in/ssdudala/">LinkedIn</link> | '
            '<link href="https://github.com/smgpulse007">GitHub</link>',
            styles["Contact"],
        ),
        Paragraph("SUMMARY", styles["Section"]),
        Paragraph(
            "Applied AI engineer with more than seven years across healthcare, insurance, document intelligence, predictive ML, and MLOps. Builds governed systems that turn complex inputs into typed, validated workflows with explicit human-review boundaries, observable traces, and production-minded evaluation.",
            styles["Body"],
        ),
        Paragraph("CORE EXPERTISE", styles["Section"]),
        Paragraph(
            "Agentic AI and LLMOps | Document intelligence, OCR, and RAG | Healthcare interoperability (FHIR and HL7) | Predictive ML | Human-in-the-loop workflow design | Evaluation and observability | Local/on-prem inference | ML platforms and MLOps",
            styles["Compact"],
        ),
        Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"]),
        role(
            "Applied AI Engineer Consultant",
            "MetLife via Bizintex",
            "2026 - Present",
            "Designs governed document and claims workflows with typed contracts, validation gates, reviewer fallbacks, and trace telemetry.",
            [
                "Supported approximately 90% lower document-handling effort and approximately 50% shorter time-to-claim-payable in a measured claims workstream.",
                "Separated model reasoning from deterministic workflow authority so uncertain cases remain visible and reviewable.",
            ],
            styles,
        ),
        role(
            "Lead DS/ML Engineer Consultant",
            "Inland Empire Health Plan via Infowave",
            "2023 - 2025",
            "Led applied ML across local document review, healthcare quality evidence, predictive analytics, fraud/waste review, and MLOps.",
            [
                "Cleared a 7,000-case review backlog with approximately 90% lower review time using a local OCR/RAG workflow inside the data boundary.",
                "Improved automated quality-measure closures by 20% and reduced transportation waste by 18% in their respective measured workflows.",
                "Built reviewer paths and evaluation around OCR, retrieval, and prediction failure rather than treating model confidence as authority.",
            ],
            styles,
        ),
        role(
            "Lead Data Scientist / Product",
            "Hexplora",
            "2020 - 2023",
            "Built and scaled a predictive healthcare analytics platform spanning risk models, data products, reporting, and care-manager workflows.",
            [
                "Supported $500K in new revenue and contributed to approximately $3M in client performance-based payouts across the broader program.",
                "Reduced model deployment cycles by approximately 50% through reusable delivery and MLOps patterns.",
            ],
            styles,
        ),
        role(
            "Data Science and Biomedical Informatics Roles",
            "CommonSpirit Health; Health New England; University of Chicago; AbbVie",
            "Earlier foundations",
            "Worked across hospital analytics, provider data, biomedical research, clinical sensors, genomics, and public-health modeling.",
            [
                "Delivered analytics across 142 hospitals and validation workflows covering more than 100,000 provider records.",
                "Reduced manual provider-review effort by 60% in a measured workflow.",
            ],
            styles,
        ),
        PageBreak(),
        Paragraph("SELECTED ENGINEERING WORK", styles["Section"]),
        bullet("Claims Intelligence - sanitized professional case study covering typed extraction, deterministic validation, exception routing, human review, and audit telemetry.", styles),
        bullet("On-Prem RAG/OCR - local document-review architecture with page-level provenance, retrieval evaluation, and explicit fallback states.", styles),
        bullet("Let's Talk Doc - team recipient, Global HL7 AI Challenge Transformative Impact in Healthcare Award (2025); individual implementation contribution remains resume-supported and qualified.", styles),
        bullet("LLM Steering Lab - public local-first workbench for activation steering, experiment manifests, model inspection, and repeatable evaluation.", styles),
        Paragraph("TECHNOLOGIES", styles["Section"]),
        Paragraph(
            "Python, SQL, TypeScript, PyTorch, scikit-learn, XGBoost, LangGraph/LangChain patterns, OCR and PDF parsing, FHIR R4, HL7, FastAPI, React, Docker, Kubernetes, MLflow, CI/CD, Azure, AWS, local model serving, observability and evaluation tooling",
            styles["Compact"],
        ),
        Paragraph("EDUCATION AND CREDENTIALS", styles["Section"]),
        bullet("M.S., Biomedical Informatics - University of Chicago, 2019", styles),
        bullet("Summer School, Public Health Modeling - Yale University, 2019", styles),
        bullet("B.Tech., Computer Science and Engineering - SRM University, 2018", styles),
        bullet("AWS Certified Machine Learning Engineer - Associate", styles),
        bullet("Microsoft Azure AI Fundamentals (AI-900); Microsoft Power BI Data Analyst (PL-300)", styles),
        Spacer(1, 4),
        Paragraph(
            "PUBLICATION NOTE: Professional systems are intentionally sanitized. No PHI, PII, employer-confidential artifacts, proprietary workflow rules, credentials, or private production details are included.",
            styles["Compact"],
        ),
    ]

    doc.build(story, canvasmaker=ResumeCanvas)
    print(OUTPUT)


if __name__ == "__main__":
    build()
