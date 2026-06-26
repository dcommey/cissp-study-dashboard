import os
import re

# Comprehensive list of critical CISSP keywords and phrases to verify
CISSP_VOCABULARY = {
    # Roles
    "Roles": ["owner", "custodian", "user", "auditor", "ciso", "cio", "management", "executive", "liability", "accountable", "responsible"],
    # Core Security Concepts
    "CIA & DAD": ["confidentiality", "integrity", "availability", "disclosure", "alteration", "destruction", "authenticity", "non-repudiation", "defense-in-depth"],
    # AAA Framework
    "AAA": ["identification", "authentication", "authorization", "auditing", "accounting"],
    # Planning & Governance
    "Governance": ["governance", "compliance", "strategic", "tactical", "operational", "alignment", "business case"],
    # Risk Management Terms
    "Risk Basics": ["inherent risk", "total risk", "residual risk", "exposure", "vulnerability", "threat", "incident", "threat vector", "threat actor", "breach"],
    # Risk Calculations
    "Risk Math": ["single loss expectancy", "sle", "annualized loss expectancy", "ale", "annual rate of occurrence", "aro", "exposure factor", "ef", "asset value", "av"],
    # Risk Responses
    "Risk Responses": ["mitigation", "avoidance", "transference", "acceptance", "deterrence", "rejection", "delphi"],
    # Control Classifications
    "Control Types": ["administrative", "managerial", "technical", "logical", "physical"],
    "Control Functions": ["preventative", "preventive", "deterrent", "detective", "corrective", "recovery", "directive"],
    # Policy Hierarchy
    "Policy Hierarchy": ["policy", "standard", "baseline", "guideline", "procedure", "sop", "aup", "acceptable use"],
    # Frameworks
    "Frameworks & Models": ["rmf", "csf", "stride", "pasta", "dread", "cobit", "itil", "maturity", "rmm", "supply chain"]
}

def analyze_transcript(transcript_path):
    if not os.path.exists(transcript_path):
        return set()
    
    with open(transcript_path, "r", encoding="utf-8") as f:
        content = f.read().lower()
    
    # Find all terms from our vocab list that actually appear in the transcript
    present_terms = set()
    for category, terms in CISSP_VOCABULARY.items():
        for term in terms:
            # Match whole words or phrases
            pattern = r'\b' + re.escape(term) + r'\b'
            if re.search(pattern, content):
                present_terms.add(term)
                
    # Also capture any uppercase acronyms (3 to 5 letters) in transcript
    with open(transcript_path, "r", encoding="utf-8") as f:
        raw_content = f.read()
    acronyms = set(re.findall(r'\b[A-Z]{3,5}\b', raw_content))
    
    # Non-CISSP words and common verbs/prepositions to exclude
    exclusions = {
        "this", "that", "they", "your", "with", "from", "have", "after", 
        "before", "while", "about", "more", "less", "some", "many", "most", 
        "each", "only", "just", "even", "also", "been", "were", "what", 
        "when", "here", "there", "then", "into", "over", "under", "both", 
        "well", "very", "much", "other", "such", "than", "them", "their",
        "does", "dont", "cant", "wont", "would", "could", "should", "shall",
        "will", "shall", "some", "same", "done", "does", "dna", "like", "covid"
    }
    
    for acr in acronyms:
        acr_lower = acr.lower()
        if acr_lower not in exclusions:
            present_terms.add(acr_lower)
            
    return present_terms

def verify_notes(notes_path, required_terms):
    if not os.path.exists(notes_path):
        return required_terms, set()
    
    with open(notes_path, "r", encoding="utf-8") as f:
        content = f.read().lower()
        
    missing = set()
    found = set()
    for term in required_terms:
        # Match whole words/phrases or sub-parts for flexibility
        pattern = re.escape(term)
        if re.search(pattern, content):
            found.add(term)
        else:
            missing.add(term)
            
    return missing, found

def verify_folder(folder_path):
    print("=" * 60)
    print(f"VERIFYING COMPLETENESS FOR: {os.path.basename(folder_path)}")
    print("=" * 60)
    
    transcript_path = os.path.join(folder_path, "transcript.txt")
    notes_path = os.path.join(folder_path, "study_notes.md")
    
    if not os.path.exists(transcript_path):
        print("Error: transcript.txt not found.")
        return False
        
    # 1. Extract important terms present in the transcript
    required_terms = analyze_transcript(transcript_path)
    print(f"Detected {len(required_terms)} key CISSP terms/acronyms in transcript.")
    
    # 2. Check notes coverage
    missing, found = verify_notes(notes_path, required_terms)
    
    coverage = (len(found) / len(required_terms) * 100) if required_terms else 100
    print(f"Coverage: {coverage:.1f}% ({len(found)}/{len(required_terms)} terms found in notes)")
    
    if missing:
        print("\n[WARNING] The following key terms were mentioned in the video but are MISSING in your study notes:")
        # Group missing terms by category for cleaner reporting
        grouped_missing = {}
        for term in missing:
            category_found = "Acronyms/Other"
            for cat, terms in CISSP_VOCABULARY.items():
                if term in terms:
                    category_found = cat
                    break
            grouped_missing.setdefault(category_found, []).append(term)
            
        for cat, terms in grouped_missing.items():
            print(f"  • {cat}: {', '.join(terms)}")
        print("\nAction: Please update study_notes.md to include these missing terms.")
        return False
    else:
        print("\n[SUCCESS] All key terms from the transcript are covered in the study notes!")
        return True

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        folder = sys.argv[1]
        verify_folder(folder)
    else:
        # Default to scanning every module folder next to this script
        base = os.path.dirname(os.path.abspath(__file__))
        # Find folders
        folders = [os.path.join(base, d) for d in os.listdir(base) if os.path.isdir(os.path.join(base, d)) and d[:2].isdigit()]
        folders.sort()
        for f in folders:
            # Only verify if study_notes.md exists
            if os.path.exists(os.path.join(f, "study_notes.md")):
                verify_folder(f)
                print("\n")
