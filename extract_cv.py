import PyPDF2

try:
    pdf_path = r'C:\Users\mahmo\Downloads\Documents\CVs_Resumes\M SAAD MAHMOOD_RESUME.pdf'
    with open(pdf_path, 'rb') as pdf_file:
        reader = PyPDF2.PdfReader(pdf_file)
        text = ''
        for page in reader.pages:
            text += page.extract_text()
        print(text)
except Exception as e:
    print(f"Error: {e}")
    # Try alternate method
    try:
        import pdfplumber
        with pdfplumber.open(pdf_path) as pdf:
            text = ''
            for page in pdf.pages:
                text += page.extract_text()
            print(text)
    except Exception as e2:
        print(f"Alternate method also failed: {e2}")
