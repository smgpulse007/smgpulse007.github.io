from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "resume" / "Shailesh-Dudala-Senior-Applied-AI-Engineer-Resume.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#07101A")
BLUE = colors.HexColor("#287D9A")
SIGNAL = colors.HexColor("#A4D638")
MUTED = colors.HexColor("#526572")
LINE = colors.HexColor("#C9D4DA")
PAPER = colors.HexColor("#FAF9F5")

pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))

styles = getSampleStyleSheet()
name = ParagraphStyle("Name", parent=styles["Title"], fontName="Arial-Bold", fontSize=22, leading=23, textColor=INK, spaceAfter=2)
role = ParagraphStyle("Role", parent=styles["Normal"], fontName="Arial-Bold", fontSize=8.2, leading=9, textColor=BLUE, tracking=1.1, spaceAfter=4)
contact = ParagraphStyle("Contact", parent=styles["Normal"], fontName="Arial", fontSize=7, leading=9, textColor=MUTED)
summary = ParagraphStyle("Summary", parent=styles["BodyText"], fontName="Arial", fontSize=7.9, leading=10.5, textColor=INK, spaceBefore=7, spaceAfter=7)
section = ParagraphStyle("Section", parent=styles["Heading2"], fontName="Arial-Bold", fontSize=7.2, leading=8, tracking=1.3, textColor=BLUE, spaceBefore=6, spaceAfter=4)
job = ParagraphStyle("Job", parent=styles["Heading3"], fontName="Arial-Bold", fontSize=9, leading=10.2, textColor=INK, spaceAfter=1)
meta = ParagraphStyle("Meta", parent=styles["Normal"], fontName="Arial-Bold", fontSize=6.8, leading=8, textColor=MUTED, spaceAfter=2)
body = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Arial", fontSize=7.3, leading=9.3, textColor=INK, spaceAfter=2)
bullet = ParagraphStyle("Bullet", parent=body, leftIndent=9, firstLineIndent=-6, bulletIndent=0, spaceAfter=2)
small = ParagraphStyle("Small", parent=body, fontSize=6.5, leading=8.1, textColor=MUTED)

def rule():
    return Table([[""]], colWidths=[7.2 * inch], rowHeights=[1], style=TableStyle([("BACKGROUND", (0,0), (-1,-1), LINE), ("BOTTOMPADDING",(0,0),(-1,-1),0), ("TOPPADDING",(0,0),(-1,-1),0)]))

def job_block(period, org, title, description, bullets):
    story = [Paragraph(f"{org} — {title}", job), Paragraph(period, meta), Paragraph(description, body)]
    story.extend(Paragraph(f"• {text}", bullet) for text in bullets)
    return KeepTogether(story + [Spacer(1, 3)])

story = [
    Paragraph("SHAILESH DUDALA", name),
    Paragraph("SENIOR APPLIED AI ENGINEER", role),
    Paragraph("shaileshdudala@icloud.com  ·  github.com/smgpulse007  ·  linkedin.com/in/ssdudala", contact),
    Spacer(1, 6), rule(),
    Paragraph("I build governed intelligent systems that move from uncertain signals to typed, validated workflows with explicit human authority. My work spans predictive healthcare, local document intelligence, context-engineered claims agents, and evidence-gated open-source execution harnesses.", summary),
    Paragraph("EXPERIENCE", section),
    job_block("2026 — present", "MetLife via Bizintex", "Applied AI Engineer Consultant", "Designing public-safe, context-engineered document and claims workflows with typed state, tool contracts, validation, exception routing, reviewer authority, and trace telemetry.", ["≈90% lower document-handling effort in a measured claim-packet workflow.", "≈50% shorter time-to-claim-payable in a supported workstream."]),
    job_block("2023 — 2025", "Inland Empire Health Plan via Infowave", "Lead DS/ML Engineer Consultant", "Led local RAG/OCR, healthcare quality evidence extraction, predictive ML, FWA analytics, MLOps, and operational reporting inside controlled data boundaries.", ["Cleared a 7K-case review backlog with ≈90% lower review time.", "Improved automated measure closures by 20%; reduced transportation waste by 18%."]),
    job_block("2020 — 2023", "Hexplora", "Lead Data Scientist / Product", "Built and scaled a predictive analytics platform across nine healthcare programs, combining calibrated risk models, data products, and care-manager workflows.", ["Supported $500K in new revenue and ≈$3M in aggregate client performance-based payouts.", "Reduced model-deployment cycles by ≈50%."]),
    job_block("Earlier foundations", "CommonSpirit Health · Health New England · University of Chicago · AbbVie", "Data science and biomedical informatics", "Worked across hospital analytics, provider data, clinical sensors, genomics, biomedical research, and public-health modeling.", ["Analytics spanning 142 hospitals; 100K+ provider records validated.", "Reduced manual provider-review effort by 60%."]),
    Paragraph("OPEN-SOURCE SYSTEMS", section),
    Table([
        [Paragraph("META HARNESS", meta), Paragraph("LLM STEERING", meta)],
        [Paragraph("Pre-1.0 evidence-gated execution harness for coding-agent phases, bounded packets, validation, proof ledgers, checkpoints, and continuation. Source-installed and read-only-first.", small), Paragraph("Activation-steering workbench with model registry, prompt-pair controls, pre/post hooks, layer/coefficient sweeps, and validated result artifacts.", small)],
    ], colWidths=[3.48*inch,3.48*inch], style=TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("BOX",(0,0),(-1,-1),.5,LINE),("INNERGRID",(0,0),(-1,-1),.5,LINE),("BACKGROUND",(0,0),(-1,0),PAPER),("LEFTPADDING",(0,0),(-1,-1),7),("RIGHTPADDING",(0,0),(-1,-1),7),("TOPPADDING",(0,0),(-1,-1),4),("BOTTOMPADDING",(0,0),(-1,-1),4)])),
    Paragraph("CORE SYSTEMS", section),
    Paragraph("Context-engineered agents · Predictive ML and calibration · Local OCR/RAG and evidence lineage · Healthcare interoperability (FHIR/HL7) · Typed validation and human review · LLMOps/MLOps · Evaluation, replay, golden sets, shadow/canary release · Cost, latency, tool, and failure telemetry", body),
    Paragraph("EDUCATION + CREDENTIALS", section),
    Paragraph("M.S., Biomedical Informatics — University of Chicago, 2019 · B.Tech., Computer Science & Engineering — SRM University, 2018 · Yale Summer School, Public Health Modeling, 2019", body),
    Paragraph("AWS Certified Machine Learning Engineer — Associate · Microsoft Azure AI Fundamentals (AI-900) · Microsoft Power BI Data Analyst (PL-300)", body),
    Spacer(1,4), rule(), Spacer(1,3),
    Paragraph("PUBLIC EDITION  ·  No phone, precise location, private application data, confidential payloads, employer prompts, PHI, PII, or production secrets.", contact),
]

doc = SimpleDocTemplate(str(OUT), pagesize=LETTER, rightMargin=.65*inch, leftMargin=.65*inch, topMargin=.4*inch, bottomMargin=.36*inch, title="Shailesh Dudala — Senior Applied AI Engineer — Public Resume", author="Shailesh Dudala", subject="Privacy-cleared public resume")
doc.build(story)
print(OUT)
