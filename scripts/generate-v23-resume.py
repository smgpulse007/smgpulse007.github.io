"""Generate the canonical one-page Portfolio V2.3 public resume.

The artifact is intentionally privacy-cleared and ATS-readable. Keep private
application data, phone numbers, precise locations, employer-confidential
details, and production secrets out of this source and its generated PDF.
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = (
    ROOT
    / "public"
    / "resume"
    / "Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf"
)

INK = colors.HexColor("#10231F")
ACCENT = colors.HexColor("#176D60")
ACCENT_DARK = colors.HexColor("#114E45")
MUTED = colors.HexColor("#536862")
RULE = colors.HexColor("#C7D5D0")
TINT = colors.HexColor("#F2F7F5")


class PublicResumeCanvas(canvas.Canvas):
    """Add deterministic metadata and a quiet privacy footer."""

    def __init__(self, *args, **kwargs):
        kwargs["invariant"] = 1
        kwargs["pageCompression"] = 1
        super().__init__(*args, **kwargs)
        self.setTitle("Shailesh Dudala - Senior Applied AI / ML Engineer Resume")
        self.setAuthor("Shailesh Dudala")
        self.setSubject("Privacy-cleared public professional resume")
        self.setKeywords(
            "Applied AI, machine learning, agentic AI, predictive ML, "
            "document intelligence, MLOps, healthcare, insurance"
        )

    def showPage(self):
        self.saveState()
        self.setStrokeColor(RULE)
        self.setLineWidth(0.55)
        self.line(0.48 * inch, 0.36 * inch, 8.02 * inch, 0.36 * inch)
        self.setFillColor(MUTED)
        self.setFont("Helvetica", 6.4)
        self.drawString(0.48 * inch, 0.20 * inch, "Public portfolio edition")
        self.drawRightString(8.02 * inch, 0.20 * inch, "shaileshdudala.com")
        self.restoreState()
        super().showPage()


def bullet(text: str, styles: dict[str, ParagraphStyle]) -> Paragraph:
    return Paragraph(f"- {text}", styles["Bullet"])


def role(
    title: str,
    organization: str,
    period: str,
    bullets: list[str],
    styles: dict[str, ParagraphStyle],
    *,
    compact: bool = False,
) -> KeepTogether:
    bullet_style = styles["CompactBullet"] if compact else styles["Bullet"]
    return KeepTogether(
        [
            Table(
                [[Paragraph(f"<b>{title}</b> | {organization}", styles["Role"]),
                  Paragraph(period, styles["PeriodRight"])]],
                colWidths=[5.82 * inch, 1.56 * inch],
                style=TableStyle(
                    [
                        ("VALIGN", (0, 0), (-1, -1), "TOP"),
                        ("LEFTPADDING", (0, 0), (-1, -1), 0),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                        ("TOPPADDING", (0, 0), (-1, -1), 0),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                    ]
                ),
            ),
            *[Paragraph(f"- {item}", bullet_style) for item in bullets],
            Spacer(1, 4.3 if compact else 5.5),
        ]
    )


def build() -> Path:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sample = getSampleStyleSheet()
    styles = {
        "Name": ParagraphStyle(
            "Name",
            parent=sample["Title"],
            fontName="Helvetica-Bold",
            fontSize=22.4,
            leading=23.8,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=0.8,
        ),
        "Headline": ParagraphStyle(
            "Headline",
            parent=sample["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.2,
            leading=13,
            textColor=ACCENT_DARK,
            alignment=TA_CENTER,
            spaceAfter=1.6,
        ),
        "Support": ParagraphStyle(
            "Support",
            parent=sample["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=10.2,
            textColor=ACCENT,
            alignment=TA_CENTER,
            spaceAfter=2.4,
        ),
        "Contact": ParagraphStyle(
            "Contact",
            parent=sample["Normal"],
            fontName="Helvetica",
            fontSize=8.0,
            leading=9.7,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=6.0,
        ),
        "Section": ParagraphStyle(
            "Section",
            parent=sample["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=9.8,
            leading=11.5,
            textColor=ACCENT_DARK,
            spaceBefore=4.0,
            spaceAfter=3.5,
            keepWithNext=True,
        ),
        "Role": ParagraphStyle(
            "Role",
            parent=sample["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=10.8,
            textColor=INK,
            keepWithNext=True,
        ),
        "PeriodRight": ParagraphStyle(
            "PeriodRight",
            parent=sample["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.0,
            leading=9.7,
            textColor=MUTED,
            alignment=2,
            keepWithNext=True,
        ),
        "Body": ParagraphStyle(
            "Body",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=9.15,
            leading=11.6,
            textColor=INK,
            spaceAfter=2,
        ),
        "Bullet": ParagraphStyle(
            "Bullet",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=8.55,
            leading=10.7,
            textColor=INK,
            leftIndent=9,
            firstLineIndent=-6,
            spaceAfter=1.1,
        ),
        "CompactBullet": ParagraphStyle(
            "CompactBullet",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=8.35,
            leading=10.3,
            textColor=INK,
            leftIndent=9,
            firstLineIndent=-6,
            spaceAfter=0.9,
        ),
        "MiniHead": ParagraphStyle(
            "MiniHead",
            parent=sample["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=9.0,
            leading=10.7,
            textColor=ACCENT_DARK,
            spaceAfter=3.0,
            keepWithNext=True,
        ),
        "Compact": ParagraphStyle(
            "Compact",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=8.25,
            leading=10.15,
            textColor=INK,
            spaceAfter=1.9,
        ),
        "OpenSource": ParagraphStyle(
            "OpenSource",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=8.05,
            leading=9.9,
            textColor=INK,
            spaceAfter=1.0,
        ),
        "Privacy": ParagraphStyle(
            "Privacy",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=6.75,
            leading=8.2,
            textColor=MUTED,
            alignment=TA_CENTER,
        ),
    }

    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=LETTER,
        rightMargin=0.55 * inch,
        leftMargin=0.55 * inch,
        topMargin=0.50 * inch,
        bottomMargin=0.47 * inch,
        title="Shailesh Dudala - Senior Applied AI / ML Engineer Resume",
        author="Shailesh Dudala",
        subject="Privacy-cleared public professional resume",
        keywords=(
            "Applied AI, machine learning, agentic AI, predictive ML, document "
            "intelligence, MLOps, healthcare, insurance"
        ),
    )

    story = [
        Paragraph("Shailesh Dudala", styles["Name"]),
        Paragraph("Senior Applied AI / ML Engineer", styles["Headline"]),
        Paragraph(
            "Production Agentic AI &#183; Predictive ML &#183; Document Intelligence "
            "&#183; MLOps &#183; Healthcare &amp; Insurance",
            styles["Support"],
        ),
        Paragraph(
            '<link href="mailto:shaileshdudala@icloud.com">shaileshdudala@icloud.com</link>'
            ' | <link href="https://shaileshdudala.com">shaileshdudala.com</link>'
            ' | <link href="https://www.linkedin.com/in/ssdudala/">LinkedIn</link>'
            ' | <link href="https://github.com/smgpulse007">GitHub</link>',
            styles["Contact"],
        ),
        Table(
            [[Paragraph(
                "Applied AI and ML engineer with more than seven years across healthcare "
                "and insurance, from biomedical research and predictive modeling to "
                "production agentic systems. Turns ambiguous operational problems into "
                "complete intelligent workflows with measurable outcomes, reliable "
                "delivery, and explicit human authority.",
                styles["Body"],
            )]],
            colWidths=[7.38 * inch],
            style=TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, -1), TINT),
                    ("BOX", (0, 0), (-1, -1), 0.5, RULE),
                    ("LEFTPADDING", (0, 0), (-1, -1), 7),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                    ("TOPPADDING", (0, 0), (-1, -1), 6),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ]
            ),
        ),
        Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"]),
        role(
            "Applied AI Engineer Consultant",
            "MetLife via Bizintex",
            "Jan 2026 - Present",
            [
                "Builds production claims and document workflows spanning typed extraction, validation, exception routing, human review, evaluation, and observability.",
                "Supported approximately 90% lower handling effort and approximately 50% shorter time-to-claim-payable in a measured claims workstream.",
            ],
            styles,
        ),
        role(
            "Lead DS/ML Engineer Consultant",
            "Inland Empire Health Plan via Infowave",
            "Feb 2023 - Oct 2025",
            [
                "Led predictive ML, calibration and explainability, local OCR/RAG, HEDIS evidence, FWA analytics, interoperability, and MLOps inside controlled data boundaries.",
                "Cleared a 7K-case backlog with approximately 90% lower review time; improved automated measure closures by 20% and reduced transportation waste by 18% in their respective workflows.",
            ],
            styles,
        ),
        role(
            "Lead Data Scientist / Product",
            "Hexplora Predictive Analytics",
            "Jun 2021 - Jan 2023",
            [
                "Helped build and scale a 0-to-1 healthcare analytics platform across nine programs, combining calibrated risk models, data products, care-manager workflows, and reusable MLOps delivery.",
                "Supported $500K in new revenue, approximately $3M in broader client P4P impact, and approximately 50% faster model-deployment cycles.",
            ],
            styles,
        ),
        role(
            "Data Scientist",
            "Hexplora Healthcare Analytics",
            "Sep 2020 - May 2021",
            [
                "Developed explainable readmission modeling, ETL automation, and the early product foundation for healthcare analytics delivery.",
            ],
            styles,
            compact=True,
        ),
        role(
            "Data Scientist Consultant",
            "CommonSpirit Health and Health New England via Infowave",
            "Nov 2020 - May 2021",
            [
                "Delivered hospital-operations and provider-data analytics spanning 142 hospitals and validation of 100K+ provider records; reduced manual provider review by 60% in a measured workflow.",
            ],
            styles,
            compact=True,
        ),
        role(
            "Biomedical Informatics and Scientific Research",
            "University of Chicago and AbbVie",
            "Research foundation",
            [
                "Worked across clinical sensors, genomics, scientific computing, biomedical research, and public-health modeling.",
            ],
            styles,
            compact=True,
        ),
    ]

    capabilities = [
        Paragraph("SELECTED CAPABILITIES", styles["MiniHead"]),
        Paragraph(
            "Agentic workflows and human review | Predictive ML, calibration, and explainability | OCR, RAG, and document evidence | FHIR/HL7 interoperability | Evaluation and observability | ML platforms and MLOps",
            styles["Compact"],
        ),
        Paragraph("SELECTED OPEN SOURCE", styles["MiniHead"]),
        Paragraph(
            "<b>Meta Harness</b> - evidence-gated execution and validation for coding-agent phases.<br/>"
            "<b>LLM Steering</b> - local-first activation-steering experiments with reproducible artifacts.",
            styles["OpenSource"],
        ),
    ]
    education = [
        Paragraph("EDUCATION + CREDENTIALS", styles["MiniHead"]),
        Paragraph("M.S., Biomedical Informatics - University of Chicago, 2019", styles["Compact"]),
        Paragraph("B.Tech., Computer Science and Engineering - SRM University, 2018", styles["Compact"]),
        Paragraph("Yale Summer School, Public Health Modeling, 2019", styles["Compact"]),
        Paragraph(
            "AWS Certified Machine Learning Engineer - Associate | Azure AI Fundamentals | Power BI Data Analyst",
            styles["Compact"],
        ),
        Paragraph("RECOGNITION", styles["MiniHead"]),
        Paragraph(
            "Team recipient - Global HL7 AI Challenge, Transformative Impact in Healthcare Award (2025), Let's Talk Doc",
            styles["Compact"],
        ),
    ]
    closing = Table(
        [[capabilities, education]],
        colWidths=[3.95 * inch, 3.43 * inch],
        style=TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEABOVE", (0, 0), (-1, 0), 0.55, RULE),
                ("LINEBEFORE", (1, 0), (1, 0), 0.55, RULE),
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 14),
                ("LEFTPADDING", (1, 0), (1, 0), 14),
                ("RIGHTPADDING", (1, 0), (1, 0), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]
        ),
    )
    story.extend(
        [
            closing,
            Spacer(1, 2),
            Paragraph(
                "PUBLICATION BOUNDARY: No phone, precise location, private application data, "
                "confidential payloads, PHI, PII, credentials, or production secrets.",
                styles["Privacy"],
            ),
        ]
    )

    document.build(story, canvasmaker=PublicResumeCanvas)
    return OUTPUT


if __name__ == "__main__":
    print(build())
