# CV

`cv.html` is the source. Rebuild the PDF with:

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
      --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
      --print-to-pdf="$HOME/Desktop/Neil_Sangwaiya_CV.pdf" "file://$PWD/cv.html"

Content matches `site-src/src/content.ts`; when one changes, change the other.
Contact block: nsangwaiya@gmail.com only. neil.lancers@gmail.com is retired and
must never appear again.
